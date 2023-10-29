import './Home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'


function Home() {
    const navigate = useNavigate(); // Hook pro navigaci
  
    // Funkce, která přesměruje uživatele na stránku detailu nákupního seznamu
    const handleJoinClick = () => {
      navigate('/ShoppingListDetail');
    };
  
    return (
      <div className="home-container">
        <div className="shopping-list">
          <h2>Svíčková</h2>
          <button className="btn btn-primary" onClick={handleJoinClick}>
            Join
          </button>
        </div>
      </div>
    );
  }
  
  export default Home;