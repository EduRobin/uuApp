import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import Modal from './Modal';
import { useTheme } from './ThemeContext';
import { useTranslation } from 'react-i18next';
import '../i18n'

function Home() {

  const { t, i18n } = useTranslation();



  const currentLanguage = i18n.language;


  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const [shoppingLists, setShoppingLists] = useState([
    { name: 'řízek', owner: false, isArchived: false },
    { name: 'kočka', owner: false, isArchived: true }
  ]);
  const [showArchived, setShowArchived] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newListName, setNewListName] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const createNewList = () => {
    if (newListName) {
      setShoppingLists(prevLists => [...prevLists, { name: newListName, owner: true, isArchived: false }]);
      setNewListName('');
      closeModal();
    }
  };

  const toggleArchiveList = (listName) => {
    setShoppingLists(shoppingLists.map(list => {
      if (list.name === listName) {
        return { ...list, isArchived: !list.isArchived };
      }
      return list;
    }));
  };

  const deleteList = (listNameToDelete) => {
    setShoppingLists(shoppingLists.filter(list => list.name !== listNameToDelete));
  };

  const visibleLists = shoppingLists.filter(list => showArchived === list.isArchived);



  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    transitionDuration: "0.4s",
    cursor: "pointer",
  };

  const buttonStyles = {
    padding: '10px 20px',
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

  const activeLanguageButtonStyle = {
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'red', // Tmavě zelená pro aktivní jazyk
    color: 'white',
    border: 'none',
    fontWeight: 'bold'
  };

  const inactiveLanguageButtonStyle = {
    ...activeLanguageButtonStyle,
    backgroundColor: '#f0f0f0', // Světle šedá pro neaktivní jazyk
    color: 'black'
  };

  return (
    <div className={theme === 'dark' ? 'home-dark-mode' : ''}>
      <div className="home-container">
        <div className="dark-light-mode">
          <button
            style={currentLanguage === 'cz' ? activeLanguageButtonStyle : inactiveLanguageButtonStyle}
            onClick={() => i18n.changeLanguage('cz')}
          >
            CZ
          </button>
          <button
            style={currentLanguage === 'en' ? activeLanguageButtonStyle : inactiveLanguageButtonStyle}
            onClick={() => i18n.changeLanguage('en')}
          >
            ENG
          </button>
        </div>
        <div className="top-bar">
          <button style={buttonStyle} type="btn" onClick={openModal}>{t('Create')}</button>
          <button style={ownerButtonStyle} onClick={() => setShowArchived(!showArchived)}>
            {showArchived ? t('Hide Archived') : t('Show Archived')}
          </button>

          <button style={userButtonStyle} onClick={toggleTheme}>
            {theme === 'dark' ? t('Přepnout na light mód') : t('Přepnout na dark mód')}
          </button>

        </div>
        {showModal && (
          <Modal onClose={closeModal}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Create New Shopping List</h2>
              <input
                type="text"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="Enter list name"
              />
              <button onClick={createNewList}>{t('Create')}</button>
            </div>
          </Modal>
        )}
        <div className="shopping-lists-container">
          {visibleLists.map((list, index) => (
            <div key={index} className="shopping-list-tile">
              <h2>{list.name}</h2>
              <button className="btn btn-primary" onClick={() => navigate(`/ShoppingListDetail/${list.name}`)}>
                {t('Join')}
              </button>
              {list.owner && (
                <>
                  {!list.isArchived && (
                    <button className="btn btn-secondary" onClick={() => toggleArchiveList(list.name)}>
                      {t("Archive")}
                    </button>
                  )}
                  {list.isArchived && (
                    <button className="btn btn-success" onClick={() => toggleArchiveList(list.name)}>
                      {t("Unarchive")}
                    </button>
                  )}
                  {!list.isArchived && (
                    <button className="btn btn-danger" onClick={() => deleteList(list.name)}>
                      {t("Delete")}
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;