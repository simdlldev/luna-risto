// script.js

// Importa i dati del menù dal file menu.js
import { menuData } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const menuContainer = document.getElementById('menu-container');
    const menuTitle = document.getElementById('menu-title');
    //const currentDateTimeElement = document.getElementById('current-date-time');

    const itemDetailModal = document.getElementById('item-detail-modal');
    const closeModalButton = document.getElementById('close-modal');
    const detailItemName = document.getElementById('detail-item-name');
    const detailItemPrice = document.getElementById('detail-item-price');
    const detailItemLabels = document.getElementById('detail-item-labels');
    const detailItemImage = document.getElementById('detail-item-image');
    const detailItemDescription = document.getElementById('detail-item-description');

    // Elementi per il nuovo modale delle indicazioni stradali
    const directionsButton = document.getElementById('directions-button');
    const directionsModal = document.getElementById('directions-modal');
    const closeDirectionsModalButton = document.getElementById('close-directions-modal');
    const googleMapsLink = document.getElementById('google-maps-link');

    // --- Placeholder per le informazioni del ristorante ---
    const restaurantInfo = {
        address: "Parco Due Laghetti, Corona Verde Stura, 10070 Nole TO",
        //phone: "+39 0123 456789",
        email: "info@tuoristorante.it",
        googleMapsUrl: "https://maps.app.goo.gl/QSGbUmpxUtuNDLGS9" // Sostituisci con l'indirizzo reale
    };
    // --- Fine Placeholder ---

    // Mappa le etichette a icone emoji
    const labelIcons = {
        "Gluten Free": "🌾🚫", // Spiga barrata per senza glutine
        "Vegetariano": "🥬",   // Broccoli per vegetariano
        "Vegano": "🌱",        // Piantina per vegano
        "Dessert": "🍰"        // Torta per dessert
        // Aggiungi altre mappature se necessario
    };

    // Funzione per trovare l'icona giusta anche se il label contiene la categoria
    function getLabelIcon(label) {
        for (const key in labelIcons) {
            if (label.includes(key)) {
                return labelIcons[key];
            }
        }
        return '';
    }

    /**
     * Determina il periodo del giorno (pranzo o cena) in base all'ora corrente.
     * @returns {string} 'pranzo' o 'cena'.
     */
    function getMealPeriod() {
        const now = new Date();
        const hour = now.getHours();
        // Consideriamo il pranzo tra le 12:00 e le 15:00
        // e la cena dalle 19:00 in poi.
        if (hour >= 12 && hour < 15) {
            return 'pranzo';
        } else if (hour >= 19 || hour < 5) { // Dalle 19:00 alle 04:59 del giorno dopo
            return 'cena';
        } else if (hour >= 15 && hour < 19) {
            // Se tra le 15:00 e le 19:00, mostriamo il menù della cena
            // con un messaggio che indica l'attesa
            return 'cena'; // Puoi gestire questo caso diversamente se vuoi
        } else { // Dalle 05:00 alle 11:59, mostriamo il menù del pranzo
            return 'pranzo';
        }
    }

    /**
     * Formatta una data in una stringa leggibile.
     * @param {Date} date - L'oggetto Date da formattare.
     * @returns {string} La data formattata.
     */
    function formatDateTime(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return date.toLocaleDateString('it-IT', options);
    }

    /**
     * Genera e visualizza il menù per il giorno e il periodo specificati.
     */
    function displayMenu() {
        const now = new Date();
        const dayIndex = now.getDay(); // 0 per Domenica, 1 per Lunedì, ecc.
        const currentDay = daysOfWeek[dayIndex];
        const mealPeriod = getMealPeriod(); // 'pranzo' o 'cena'

        const dailyMenu = menuData[currentDay]?.[mealPeriod] || [];

        menuTitle.textContent = `Menù del ${currentDay}  ${mealPeriod === 'pranzo' ? 'Pranzo' : 'Cena'}`;
        //currentDateTimeElement.textContent = `Aggiornato al: ${formatDateTime(now)}`;

        menuContainer.innerHTML = ''; // Pulisce il contenitore del menù

        if (dailyMenu.length === 0) {
            menuContainer.innerHTML = '<p class="text-center text-gray-600 text-xl">Nessun menù disponibile per questo periodo. Torna più tardi!</p>';
            return;
        }

        dailyMenu.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item-card bg-white shadow-md overflow-hidden transform transition-all hover:scale-105 cursor-pointer flex flex-col';
            // Usa item.image per la visualizzazione nella card del menu
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-t-xl">
                <div class="menu-item-content p-6 flex flex-col flex-grow">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-2">${item.name}</h3>
                    ${item.shortDescription ? `<p class="text-gray-700 text-base mb-2">${item.shortDescription}</p>` : ''}
                    <p class="price text-xl text-orange-600 font-bold mb-4">${item.price}</p>
                    <div class="menu-item-labels flex flex-wrap gap-2 mt-auto">
                        ${item.labels.map(label => `<span class="label bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-semibold">${getLabelIcon(label)} ${label}</span>`).join('')}
                    </div>
                </div>
                <!-- Icona "Info" nell'angolo in basso a destra -->
                <span class="material-symbols-rounded info-icon">info</span>
            `;
            card.addEventListener('click', () => showItemDetail(item));
            menuContainer.appendChild(card);
        });
    }

    /**
     * Mostra il modale con i dettagli del piatto.
     * @param {object} item - L'oggetto del piatto da visualizzare.
     */
    function showItemDetail(item) {
        detailItemName.textContent = item.name;
        detailItemPrice.textContent = item.price;
        // Usa item.detailImage se definita, altrimenti fallback a item.image
        detailItemImage.src = item.detailImage || item.image;
        detailItemImage.alt = item.name;
        detailItemDescription.innerHTML = item.description;

        detailItemLabels.innerHTML = '';
        item.labels.forEach(label => {
            const span = document.createElement('span');
            span.className = 'label bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-semibold';
            span.innerHTML = `${getLabelIcon(label)} ${label}`;
            detailItemLabels.appendChild(span);
        });

        itemDetailModal.classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('modal-content-wrapper').classList.remove('opacity-0', 'scale-95');
            document.getElementById('modal-content-wrapper').classList.add('opacity-100', 'scale-100');
        }, 10);

        // Aggiungi uno stato alla history per il popup
        history.pushState({ modal: 'item-detail' }, '');
    }

    /**
     * Nasconde il modale dei dettagli del piatto.
     */
    function hideItemDetail() {
        document.getElementById('modal-content-wrapper').classList.remove('opacity-100', 'scale-100');
        document.getElementById('modal-content-wrapper').classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            itemDetailModal.classList.add('hidden');
        }, 300);

        // Torna indietro nella history solo se il popup era aperto tramite pushState
        if (history.state && history.state.modal === 'item-detail') {
            history.back();
        }
    }

    /**
     * Mostra il modale delle indicazioni stradali.
     */
    function showDirectionsModal() {
        document.getElementById('directions-address').textContent = restaurantInfo.address;
        //document.getElementById('directions-phone').textContent = restaurantInfo.phone;
        //document.getElementById('directions-email').textContent = restaurantInfo.email;
        googleMapsLink.href = restaurantInfo.googleMapsUrl;

        directionsModal.classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('directions-modal-content-wrapper').classList.remove('opacity-0', 'scale-95');
            document.getElementById('directions-modal-content-wrapper').classList.add('opacity-100', 'scale-100');
        }, 10);

        // Aggiungi uno stato alla history per il popup
        history.pushState({ modal: 'directions' }, '');
    }

    /**
     * Nasconde il modale delle indicazioni stradali.
     */
    function hideDirectionsModal() {
        document.getElementById('directions-modal-content-wrapper').classList.remove('opacity-100', 'scale-100');
        document.getElementById('directions-modal-content-wrapper').classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            directionsModal.classList.add('hidden');
        }, 300);

        // Torna indietro nella history solo se il popup era aperto tramite pushState
        if (history.state && history.state.modal === 'directions') {
            history.back();
        }
    }

    // Event listener per chiudere il modale del dettaglio piatto
    closeModalButton.addEventListener('click', hideItemDetail);
    itemDetailModal.addEventListener('click', (event) => {
        // Chiudi il modale solo se si clicca sullo sfondo, non sul contenuto del modale
        if (event.target === itemDetailModal) {
            hideItemDetail();
        }
    });

    // Event listener per il pulsante "Indicazioni Stradali"
    directionsButton.addEventListener('click', showDirectionsModal);

    // Event listener per chiudere il modale delle indicazioni stradali
    closeDirectionsModalButton.addEventListener('click', hideDirectionsModal);
    directionsModal.addEventListener('click', (event) => {
        if (event.target === directionsModal) {
            hideDirectionsModal();
        }
    });

    // Visualizza il menù all'avvio della pagina
    displayMenu();

    // Aggiorna il menù ogni ora (o più frequentemente se desiderato)
    setInterval(displayMenu, 3600000); // 3600000 ms = 1 ora
});

// Gestione del tasto indietro
window.addEventListener('popstate', function (event) {
    // Se c'è un popup aperto, chiudilo
    if (!itemDetailModal.classList.contains('hidden')) {
        hideItemDetail();
    } else if (!directionsModal.classList.contains('hidden')) {
        hideDirectionsModal();
    } else {
        // Se nessun popup è aperto, rimani sulla pagina (inibisci la chiusura)
        history.pushState(null, '', document.URL);
    }
});

// All'avvio, aggiungi uno stato iniziale per bloccare la chiusura
window.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ modal: null }, '');
    // ...resto del tuo codice...
});

function isMobileDevice() {
    return /android|iphone|ipad|ipod|opera mini|iemobile|blackberry|mobile/i.test(navigator.userAgent);
}

function checkDesktopMode() {
    const modal = document.getElementById('desktop-warning-modal');
    // Mostra il popup solo se NON è un device mobile
    if (!isMobileDevice()) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

// Mostra/nascondi il popup al caricamento e al resize
window.addEventListener('DOMContentLoaded', checkDesktopMode);
window.addEventListener('resize', checkDesktopMode);

// Chiudi il popup manualmente
document.getElementById('close-desktop-warning').addEventListener('click', function() {
    document.getElementById('desktop-warning-modal').classList.add('hidden');
});
