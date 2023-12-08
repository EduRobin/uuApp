
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ShoppingListDetail from './pages/ShoppingListDetail'
import { ThemeProvider } from './pages/ThemeContext';
import './index.css';
import './i18n';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="*" element={<Home />} />
            <Route path="/ShoppingListDetail/:listName" element={<ShoppingListDetail />} />
            <Route path="/Home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

