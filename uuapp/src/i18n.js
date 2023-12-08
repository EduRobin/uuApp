// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    //Home.js
                    'Create': 'Create',
                    "Show Archived": "Show Archived",
                    "Hide Archived": "Hide Archived",
                    "Přepnout na dark mód": 'switch to dark mode',
                    "Přepnout na light mód": 'switch to light mode',
                    "Join": "Join",
                    "Archive": "Archive",
                    "Unarchive": "Unarchive",
                    "Delete": "Delete",
                    //ShoppingListDetail.js
                    "Přidat člena": "Add member",
                    "Přidat do seznamu": "Add to list",
                    "Item List": "Item List",
                    "Go Back": "Go back",
                    "Owner": "Owner",
                    "User": "User",
                    "Kick": "Kick",
                    "Leave": "Leave",
                    "Odebrat": "Remove",
                    "Vyberte surovinu": "Select the raw material",
                    //jidlo
                    "Beef": "Beef",
                    "Onion": "Onion",
                    "Carrot": "Carrot",
                    "Parsley": "Parsley",
                    "Celery": "Celery",
                    "Flour": "Flour",
                    "Salt": "Salt",
                    "Banana": "Banana",
                    "Pepper": "Pepper",
                    "Apple": "Apple",
                    "Chicken": "Chicken",
                    "Tomato": "Tomato",
                    "Potato": "Potato",
                    "Garlic": "Garlic",
                    "Mushroom": "Mushroom",
                    "Broccoli": "Broccoli",
                    "Bell Pepper": "Bell Pepper",
                    "Spinach": "Spinach",
                    "Orange": "Orange",
                    "Pork": "Pork",
                    "Salmon": "Salmon",
                    "Rice": "Rice",
                    "Zucchini": "Zucchini",
                    "Avocado": "Avocado",
                    "Lemon": "Lemon",
                    "Millet": "Millet",
                    "Quinoa": "Quinoa",
                    "Eggplant": "Eggplant",
                    "Beans": "Beans",
                    "Peas": "Peas",
                    "Corn": "Corn",
                    "Nuts": "Nuts",
                    "Honey": "Honey",
                    "Yogurt": "Yogurt",
                    "Cheese": "Cheese",
                    "Eggs": "Eggs",
                    "Butter": "Butter",
                    "Oil": "Oil",
                    "Vinegar": "Vinegar",
                    "Pasta": "Pasta",





                }
            },
            cz: {
                translation: {
                    //Home.js
                    'Create': 'Vytvořit',
                    "Show Archived": "Zobrazit Archivované",
                    "Hide Archived": "Skrýt Archivované",
                    "Přepnout na dark mód": 'Přepnout na dark mód',
                    "Přepnout na light mód": 'Přepnout na light mód',
                    "Join": "Připojit se",
                    "Archive": "Archivovat",
                    "Unarchive": "zrušit archivaci",
                    "Delete": "Smazat",
                    //ShoppingListDetail.js
                    "Přidat člena": "Přidat člena",
                    "Přidat do seznamu": "Přidat do seznamu",
                    "Item List": "Seznam surovin",
                    "Go back": "Zpět",
                    "Owner": "Majitel",
                    "User": "Uživatel",
                    "Kick": "Vyhodit",
                    "Leave": "Odejít",
                    "Odebrat": "Odebrat",
                    "Vyberte surovinu": "Vyberte surovinu",
                    //jidlo
                    "Beef": "Hovězí maso",
                    "Onion": "Cibule",
                    "Carrot": "Mrkev",
                    "Parsley": "Petržel",
                    "Celery": "Celer",
                    "Flour": "Mouka",
                    "Salt": "Sůl",
                    "Banana": "Banán",
                    "Pepper": "Pepř",
                    "Apple": "Jablko",
                    "Chicken": "Kuřecí maso",
                    "Tomato": "Rajčata",
                    "Potato": "Brambory",
                    "Garlic": "Česnek",
                    "Mushroom": "Žampiony",
                    "Broccoli": "Brokolice",
                    "Bell Pepper": "Paprika",
                    "Spinach": "Špenát",
                    "Orange": "Pomeranč",
                    "Pork": "Vepřové maso",
                    "Salmon": "Losos",
                    "Rice": "Rýže",
                    "Zucchini": "Cuketa",
                    "Avocado": "Avokádo",
                    "Lemon": "Citron",
                    "Millet": "Jáhly",
                    "Quinoa": "Quinoa",
                    "Eggplant": "Lilek",
                    "Beans": "Fazole",
                    "Peas": "Hrách",
                    "Corn": "Kukuřice",
                    "Nuts": "Ořechy",
                    "Honey": "Med",
                    "Yogurt": "Jogurt",
                    "Cheese": "Sýr",
                    "Eggs": "Vajíčka",
                    "Butter": "Máslo",
                    "Oil": "Olej",
                    "Vinegar": "Ocet",
                    "Pasta": "Těstoviny",

                }
            },
        },
        lng: 'cz',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;