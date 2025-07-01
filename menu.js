// menu.js - Contiene i dati del menù per il ristorante

// Dati del menù per ogni giorno della settimana, con pranzo e cena diversi.
// Puoi espandere questo oggetto per includere più giorni e più piatti.
export const menuData = {
    "Domenica": {
        "pranzo": [
            {
                name: "Lasagne al Forno",
                price: "€12.50",
                labels: ["Vegetariano"],
                description: "Stratificata pasta fresca con ragù di verdure e besciamella, cotta al forno fino a doratura. Un classico della cucina italiana, perfetto per un pranzo in famiglia.",
                image: "https://placehold.co/400x300/FFD700/000000?text=Lasagne+al+Forno"
            },
            {
                name: "Filetto di Manzo con Patate al Rosmarino",
                price: "€22.00",
                labels: ["Gluten Free"],
                description: "Tenero filetto di manzo cotto alla perfezione, accompagnato da patate fresche arrostite con rosmarino e aglio. Un piatto ricco di sapore e tradizione.",
                image: "https://placehold.co/400x300/8B4513/FFFFFF?text=Filetto+di+Manzo"
            },
            {
                name: "Insalata Estiva con Feta e Anguria",
                price: "€9.50",
                labels: ["Vegetariano", "Gluten Free", "Vegano (su richiesta)"],
                description: "Un'insalata rinfrescante con cubetti di anguria, formaggio feta, cetrioli, menta fresca e un dressing leggero al lime. Ideale per le giornate calde.",
                image: "https://placehold.co/400x300/ADD8E6/000000?text=Insalata+Estiva"
            }
        ],
        "cena": [
            {
                name: "Risotto ai Funghi Porcini",
                price: "€15.00",
                labels: ["Vegetariano", "Gluten Free"],
                description: "Cremoso risotto preparato con funghi porcini freschi e una spolverata di prezzemolo. Un piatto avvolgente e aromatico, perfetto per una cena rilassante.",
                image: "https://placehold.co/400x300/8B4513/FFFFFF?text=Risotto+ai+Funghi"
            },
            {
                name: "Salmone al Forno con Asparagi",
                price: "€18.00",
                labels: ["Gluten Free"],
                description: "Filetto di salmone fresco cotto al forno con asparagi croccanti e una spruzzata di limone. Un'opzione leggera ma saporita.",
                image: "https://placehold.co/400x300/FF6347/FFFFFF?text=Salmone+e+Asparagi"
            },
            {
                name: "Tiramisù Classico",
                price: "€6.00",
                labels: ["Dessert"],
                description: "Il nostro tiramisù fatto in casa con savoiardi inzuppati nel caffè, crema al mascarpone e cacao. Un dolce iconico per concludere la serata.",
                image: "https://placehold.co/400x300/D2B48C/000000?text=Tiramisu"
            }
        ]
    },
    "Lunedì": {
        "pranzo": [
            {
                name: "Spaghetti alla Carbonara",
                price: "€11.00",
                labels: [],
                description: "Spaghetti con guanciale croccante, uova, pecorino romano e pepe nero macinato fresco. Un'autentica ricetta romana.",
                image: "https://placehold.co/400x300/F5DEB3/000000?text=Spaghetti+Carbonara"
            },
            {
                name: "Pollo al Curry con Riso Basmati",
                price: "€14.00",
                labels: ["Gluten Free"],
                description: "Bocconcini di pollo teneri in una salsa cremosa al curry, serviti con riso basmati profumato. Un viaggio di sapori esotici.",
                image: "https://placehold.co/400x300/B0C4DE/000000?text=Pollo+al+Curry"
            },
            {
                name: "Lasagne al Forno",
                price: "€12.50",
                labels: ["Vegetariano"],
                description: "Stratificata pasta fresca con ragù di verdure e besciamella, cotta al forno fino a doratura. Un classico della cucina italiana, perfetto per un pranzo in famiglia.",
                image: "https://placehold.co/400x300/FFD700/000000?text=Lasagne+al+Forno"
            }
        ],
        "cena": [
            {
                name: "Pizza Margherita",
                price: "€9.00",
                labels: ["Vegetariano"],
                description: "La classica pizza napoletana con pomodoro San Marzano, mozzarella fior di latte, basilico fresco e un filo d'olio extra vergine d'oliva. Semplice e deliziosa.",
                image: "https://placehold.co/400x300/FF4500/FFFFFF?text=Pizza+Margherita"
            },
            {
                name: "Zuppa di Legumi e Cereali",
                price: "€10.00",
                labels: ["Vegetariano", "Vegano", "Gluten Free"],
                description: "Una zuppa rustica e nutriente con una varietà di legumi e cereali, perfetta per le serate fresche. Ricca di fibre e proteine vegetali.",
                image: "https://placehold.co/400x300/8B4513/FFFFFF?text=Zuppa+Legumi"
            },
            {
                name: "Gnocchi al Pesto",
                price: "€10.50",
                labels: ["Vegetariano"],
                description: "Morbidi gnocchi di patate conditi con il nostro pesto genovese fatto in casa, pinoli e parmigiano. Un sapore fresco e autentico.",
                image: "https://placehold.co/400x300/90EE90/000000?text=Gnocchi+al+Pesto"
            },
            {
                name: "Cotoletta alla Milanese",
                price: "€16.00",
                labels: [],
                description: "Cotoletta di vitello impanata e fritta, croccante fuori e tenera dentro, servita con un contorno di stagione. Un classico della cucina lombarda.",
                image: "https://placehold.co/400x300/D3D3D3/000000?text=Cotoletta+Milanese"
            }
        ]
    },
    "Martedì": {
        "pranzo": [
            {
                name: "Gnocchi al Pesto",
                price: "€10.50",
                labels: ["Vegetariano"],
                description: "Morbidi gnocchi di patate conditi con il nostro pesto genovese fatto in casa, pinoli e parmigiano. Un sapore fresco e autentico.",
                image: "https://placehold.co/400x300/90EE90/000000?text=Gnocchi+al+Pesto"
            },
            {
                name: "Cotoletta alla Milanese",
                price: "€16.00",
                labels: [],
                description: "Cotoletta di vitello impanata e fritta, croccante fuori e tenera dentro, servita con un contorno di stagione. Un classico della cucina lombarda.",
                image: "https://placehold.co/400x300/D3D3D3/000000?text=Cotoletta+Milanese"
            }
        ],
        "cena": [
            {
                name: "Ravioli di Zucca con Burro e Salvia",
                price: "€13.50",
                labels: ["Vegetariano"],
                description: "Ravioli ripieni di zucca, conditi con burro fuso, foglie di salvia fresca e una spolverata di parmigiano. Un piatto dolce e saporito.",
                image: "https://placehold.co/400x300/FFDAB9/000000?text=Ravioli+Zucca"
            },
            {
                name: "Tagliata di Manzo con Rucola e Grana",
                price: "€20.00",
                labels: ["Gluten Free"],
                description: "Fette di <b>manzo</b> alla griglia, servite su un letto di rucola fresca e scaglie di grana padano. Un piatto leggero ma gustoso.",
                image: "https://placehold.co/400x300/A9A9A9/FFFFFF?text=Tagliata+Manzo"
            },
            {
                name: "Pizza Margherita",
                price: "€9.00",
                labels: ["Vegetariano"],
                description: "La classica pizza napoletana con pomodoro San Marzano, mozzarella fior di latte, basilico fresco e un filo d'olio extra vergine d'oliva. Semplice e deliziosa.",
                image: "https://placehold.co/400x300/FF4500/FFFFFF?text=Pizza+Margherita"
            }
        ]
    },
    "Mercoledì": {
        "pranzo": [
            {
                name: "Pasta e Fagioli",
                price: "€9.00",
                labels: ["Vegetariano", "Vegano"],
                description: "Una zuppa densa e confortante con pasta corta e fagioli borlotti, arricchita con erbe aromatiche. Perfetta per riscaldarsi.",
                image: "https://placehold.co/400x300/CD853F/FFFFFF?text=Pasta+e+Fagioli"
            },
            {
                name: "Baccalà alla Vicentina",
                price: "€17.00",
                labels: ["Gluten Free"],
                description: "Baccalà cotto lentamente con cipolle, acciughe, latte e formaggio, servito con polenta. Un piatto tradizionale veneto.",
                image: "https://placehold.co/400x300/87CEEB/000000?text=Baccalà+Vicentina"
            },
            {
                name: "Panino con Porchetta e Cicoria",
                price: "€9.00",
                labels: [],
                description: "Un panino rustico ripieno di succulenta porchetta romana e cicoria ripassata in padella. Un vero comfort food.",
                image: "https://placehold.co/400x300/D2B48C/000000?text=Panino+Porchetta"
            }
        ],
        "cena": [
            {
                name: "Cacio e Pepe",
                price: "€10.00",
                labels: ["Vegetariano"],
                description: "Un classico romano con spaghetti, pecorino romano e abbondante pepe nero. Semplice, ma incredibilmente saporito.",
                image: "https://placehold.co/400x300/F0E68C/000000?text=Cacio+e+Pepe"
            },
            {
                name: "Orata al Sale",
                price: "€19.00",
                labels: ["Gluten Free"],
                description: "Orata intera cotta sotto una crosta di sale, che ne preserva la tenerezza e il sapore. Servita con verdure fresche.",
                image: "https://placehold.co/400x300/ADD8E6/000000?text=Orata+al+Sale"
            },
            {
                name: "Lasagne al Forno",
                price: "€12.50",
                labels: ["Vegetariano"],
                description: "Stratificata pasta fresca con ragù di verdure e besciamella, cotta al forno fino a doratura. Un classico della cucina italiana, perfetto per un pranzo in famiglia.",
                image: "https://placehold.co/400x300/FFD700/000000?text=Lasagne+al+Forno"
            }
        ]
    },
    "Giovedì": {
        "pranzo": [
            {
                name: "Risotto alla Milanese con Ossobuco",
                price: "€18.00",
                labels: ["Gluten Free"],
                description: "Risotto allo zafferano accompagnato da un tenero ossobuco di vitello. Un piatto iconico della cucina lombarda.",
                image: "https://placehold.co/400x300/FFD700/000000?text=Risotto+Ossobuco"
            },
            {
                name: "Panino con Porchetta e Cicoria",
                price: "€9.00",
                labels: [],
                description: "Un panino rustico ripieno di succulenta porchetta romana e cicoria ripassata in padella. Un vero comfort food.",
                image: "https://placehold.co/400x300/D2B48C/000000?text=Panino+Porchetta"
            }
        ],
        "cena": [
            {
                name: "Agnolotti del Plin con Sugo d'Arrosto",
                price: "€14.00",
                labels: [],
                description: "Piccoli agnolotti piemontesi ripieni di carne, serviti con un ricco sugo d'arrosto. Un'esplosione di sapore.",
                image: "https://placehold.co/400x300/BC8F8F/FFFFFF?text=Agnolotti+Plin"
            },
            {
                name: "Polenta con Brasato",
                price: "€17.00",
                labels: ["Gluten Free"],
                description: "Morbida polenta accompagnata da un brasato di manzo cotto lentamente nel vino rosso. Un piatto robusto e saporito.",
                image: "https://placehold.co/400x300/DAA520/000000?text=Polenta+Brasato"
            }
        ]
    },
    "Venerdì": {
        "pranzo": [
            {
                name: "Fritto Misto di Pesce",
                price: "€16.00",
                labels: [],
                description: "Un assortimento di pesce fresco fritto alla perfezione, leggero e croccante. Servito con salsa tartare e limone.",
                image: "https://placehold.co/400x300/87CEFA/000000?text=Fritto+Misto"
            },
            {
                name: "Pasta alla Norma",
                price: "€11.50",
                labels: ["Vegetariano"],
                description: "Pasta con melanzane fritte, pomodoro, ricotta salata e basilico. Un classico siciliano pieno di sole.",
                image: "https://placehold.co/400x300/FFA07A/000000?text=Pasta+alla+Norma"
            }
        ],
        "cena": [
            {
                name: "Costolette d'Agnello Scottadito",
                price: "€21.00",
                labels: ["Gluten Free"],
                description: "Costolette d'agnello alla griglia, tenere e succose, da mangiare 'scottadito' (ustionandosi le dita).",
                image: "https://placehold.co/400x300/A9A9A9/FFFFFF?text=Costolette+Agnello"
            },
            {
                name: "Pizza ai Frutti di Mare",
                price: "€14.00",
                labels: [],
                description: "Pizza con un ricco condimento di frutti di mare freschi, pomodoro e prezzemolo. Un sapore di mare autentico.",
                image: "https://placehold.co/400x300/4682B4/FFFFFF?text=Pizza+Frutti+Mare"
            }
        ]
    },
    "Sabato": {
        "pranzo": [
            {
                name: "Hamburger Gourmet con Patatine",
                price: "€13.00",
                labels: [],
                description: "Hamburger di manzo 100% italiano con formaggio, bacon croccante, cipolla caramellata e salsa speciale, servito con patatine fritte.",
                image: "https://placehold.co/400x300/D2B48C/000000?text=Hamburger+Gourmet"
            },
            {
                name: "Insalata di Polpo e Patate",
                price: "€15.00",
                labels: ["Gluten Free"],
                description: "Polpo tenero e patate lesse, conditi con prezzemolo, aglio, olio d'oliva e limone. Un antipasto fresco e leggero.",
                image: "https://placehold.co/400x300/B0C4DE/000000?text=Insalata+Polpo"
            }
        ],
        "cena": [
            {
                name: "Fiorentina (min. 2 persone)",
                price: "€50.00",
                labels: ["Gluten Free"],
                description: "La regina della cucina toscana: una succulenta bistecca alla fiorentina, cotta al sangue, perfetta da condividere.",
                image: "https://placehold.co/400x300/8B0000/FFFFFF?text=Bistecca+Fiorentina"
            },
            {
                name: "Selezione di Formaggi e Marmellate",
                price: "€16.00",
                labels: ["Vegetariano", "Gluten Free"],
                description: "Un assortimento dei migliori formaggi locali e nazionali, accompagnati da marmellate artigianali e miele. Ideale per gli amanti del formaggio.",
                image: "https://placehold.co/400x300/D2B48C/000000?text=Formaggi+e+Marmellate"
            }
        ]
    }
};
