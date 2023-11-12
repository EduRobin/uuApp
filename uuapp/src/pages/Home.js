import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import Modal from './Modal';

function Home() {
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

  return (
    <div className="home-container">
      <div className="top-bar">
        <button onClick={openModal}>Create</button>
        <button onClick={() => setShowArchived(!showArchived)}>
          {showArchived ? 'Hide Archived' : 'Show Archived'}
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
          <button onClick={createNewList}>Vytvořit</button>
        </div>
      </Modal>
      )}
      <div className="shopping-lists-container">
        {visibleLists.map((list, index) => (
          <div key={index} className="shopping-list-tile">
            <h2>{list.name}</h2>
            <button className="btn btn-primary" onClick={() => navigate(`/ShoppingListDetail/${list.name}`)}>
              Join
            </button>
            {list.owner && (
              <>
                {!list.isArchived && (
                  <button className="btn btn-secondary" onClick={() => toggleArchiveList(list.name)}>
                    Archive
                  </button>
                )}
                {list.isArchived && (
                  <button className="btn btn-success" onClick={() => toggleArchiveList(list.name)}>
                    Unarchive
                  </button>
                )}
                {!list.isArchived && (
                  <button className="btn btn-danger" onClick={() => deleteList(list.name)}>
                    Delete
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;