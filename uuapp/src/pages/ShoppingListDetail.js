import './ShoppingListDetail';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ShoppingListDetail.css';
import { useNavigate } from 'react-router-dom';
import { mockListItems } from '../mockData/mockData';
import { fetchData, createItem } from '../api';
import { useTheme } from './ThemeContext';
import '../i18n';
import { useTranslation } from 'react-i18next';



function ShoppingListDetail() {

    const { t } = useTranslation();

    const { theme, toggleTheme } = useTheme();

    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = useMockData ? mockListItems : await fetchData();
            setItems(data);
        };

        loadData();
    });
    //STYLY


    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        padding: "10px 20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        transitionDuration: "0.4s",
        cursor: "pointer",
    };

    const removeButtonStyle = {
        ...buttonStyle,
        backgroundColor: "red",
    };

    const listItemStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        display: 'flex',
        alignItems: 'center'
    };

    const ingredientStyle = {
        flex: 1 // zajistí, že text suroviny zabere dostupné místo
    };

    const checkboxStyle = {
        marginRight: '20px',
    }

    //owner a user
    const buttonStyles = {
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#3f51b5',
        color: 'white'
    };

    const userButtonStyle = {
        ...buttonStyles,
        backgroundColor: '#FFA500', // Oranžová
        color: 'white'
    };

    const ownerButtonStyle = {
        ...buttonStyles,
        backgroundColor: '#1E90FF', // Modrá
        color: 'white'
    };

    const addButtonStyle = {
        ...buttonStyles,
        backgroundColor: '#3f51b5',
        color: 'white'
    };

    const leaveKickButtonStyle = {
        ...buttonStyles,
        backgroundColor: '#FF0000', // Červená
        color: 'white'
    };
    //PROMĚNNÉ

    const predefinedIngredients = [
        t('Beef'),
    t('Onion'),
    t('Carrot'),
    t('Parsley'),
    t('Celery'),
    t('Flour'),
    t('Salt'),
    t('Banana'),
    t('Pepper'),
    t('Apple'),
    t('Chicken'),
    t('Tomato'),
    t('Potato'),
    t('Garlic'),
    t('Mushroom'),
    t('Broccoli'),
    t('Bell Pepper'),
    t('Spinach'),
    t('Orange'),
    t('Pork'),
    t('Salmon'),
    t('Rice'),
    t('Zucchini'),
    t('Avocado'),
    t('Lemon'),
    t('Millet'),
    t('Quinoa'),
    t('Eggplant'),
    t('Beans'),
    t('Peas'),
    t('Corn'),
    t('Nuts'),
    t('Honey'),
    t('Yogurt'),
    t('Cheese'),
    t('Eggs'),
    t('Butter'),
    t('Oil'),
    t('Vinegar'),
    t('Pasta'),
    ];



    // Funkce pro změnu role uživatele
    const switchRole = () => {
        setIsOwner(!isOwner);
    };

    const [members, setMembers] = useState([]);
    const [isOwner, setIsOwner] = useState(true);

    // Funkce pro přidání nového člena do seznamu
    const addMember = () => {
        const newMember = `User ${members.length + 1}`;
        setMembers(prevMembers => [...prevMembers, newMember]);
    };

    // Funkce pro odebrání člena ze seznamu
    const removeMember = (memberToRemove) => {
        setMembers(members.filter(member => member !== memberToRemove));
    };

    const navigate = useNavigate(); // získání přístupu k historii

    const leaveGroup = (memberToRemove) => {
        setMembers(members.filter(member => member !== memberToRemove));
        navigate('/home'); // přesměrování na domovskou stránku
    };



    const [checkedItems, setCheckedItems] = useState({});

    const toggleChecked = (ingredient) => { // Nová funkce pro přepínání stavu checkboxů
        setCheckedItems(prevState => ({
            ...prevState,
            [ingredient]: !prevState[ingredient]
        }));
    };


    // Stavová proměnná pro uchování uživatelova seznamu surovin
    const [userIngredients, setUserIngredients] = useState([]);

    // Stavová proměnná pro uchování vybrané suroviny z dropdown menu
    const [selectedIngredient, setSelectedIngredient] = useState('');

    // Funkce pro přidání vybrané suroviny do uživatelova seznamu
    const addIngredient = () => {
        if (selectedIngredient && !userIngredients.includes(selectedIngredient)) {
            setUserIngredients([...userIngredients, selectedIngredient]);
        }
    };


    //Funkce pro odebírání suroviny z uživatelova seznamu
    const removeIngredient = (ingredientToRemove) => {
        setUserIngredients(userIngredients.filter(ingredient => ingredient !== ingredientToRemove));
    };

    //list name change
    const [listName, setListName] = useState('Shopping List');
    const changeListName = (newName) => {
        setListName(newName);
    };


    return (
        <div className={theme === 'dark' ? 'shoppinglist-detail-dark-mode' : ''}>
            <div className='shoppinglistdetail-container'>

                <div className='go-back-button'> {/*dodělat go back button navigaci*/}
                    <button onClick={leaveGroup}>{t("Go back")}</button>
                </div>
                <div className='shoppinglistdetail'>
                    {isOwner && (
                        <div className='shoppinglistdetail-name'>
                            <input
                                type="text"
                                className="form-control"
                                value={listName}
                                onChange={(e) => changeListName(e.target.value)}
                            />

                            {listName}

                        </div>
                    )}
                </div>

                <div className='shoppinglistdetail'>
                    {!isOwner && (
                        <div className='shoppinglistdetail-name'>

                            {listName}

                        </div>
                    )}
                </div>


                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <button style={isOwner ? ownerButtonStyle : userButtonStyle} onClick={switchRole}>
                        {isOwner ? t("Owner") : t('User')}
                    </button>
                    
                </div>


                <h1 style={{ textAlign: 'center' }}>{t("Item List")}</h1>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <select
                        value={selectedIngredient}
                        onChange={(e) => setSelectedIngredient(e.target.value)}
                        style={{ padding: '8px', marginRight: '10px', fontSize: '16px' }}
                    >
                        <option value="">{t("Vyberte surovinu")}</option>
                        {predefinedIngredients.map((ingredient, index) => (
                            <option key={index} value={ingredient}>
                                {ingredient}
                            </option>
                        ))}
                    </select>

                    <button onClick={addIngredient} style={buttonStyle}>{t("Přidat do seznamu")}</button>

                </div>

                <div>
                    {userIngredients.map((ingredient, index) => (
                        <div key={index} style={listItemStyle}>
                            <input
                                type="checkbox"
                                checked={!!checkedItems[ingredient]}
                                onChange={() => toggleChecked(ingredient)}
                                style={checkboxStyle}
                            />
                            <p style={ingredientStyle}>{ingredient}</p>
                            <button onClick={() => removeIngredient(ingredient)} style={removeButtonStyle}>{t("Odebrat")}</button>
                        </div>
                    ))}
                </div>
                <div>
                    <div>
                        {/* Seznam všech členů */}
                        <ul>
                            {members.map((member, index) => (
                                <li key={index}>
                                    {member}
                                    {isOwner ? (
                                        <button onClick={() => removeMember(member)} style={leaveKickButtonStyle}>{t("Kick")}</button>
                                    ) : (
                                        member === 'User 1' && <button onClick={() => leaveGroup(member)} style={leaveKickButtonStyle}>{t("Leave")}</button>
                                    )}
                                </li>
                            ))}
                        </ul>
                        {isOwner && (
                            <button onClick={addMember} style={addButtonStyle}>
                                {t('Přidat člena')}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingListDetail;