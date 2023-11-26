import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Nahraďte URL adresou vašeho serveru

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/shoppingList`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the shopping list", error);
  }
};

export const createItem = async (itemData) => {
  try {
    const response = await axios.post(`${API_URL}/shoppingList`, itemData);
    return response.data;
  } catch (error) {
    console.error("There was an error creating the item", error);
  }
};