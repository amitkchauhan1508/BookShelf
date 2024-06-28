// services/api.js
import data from '../assets/data';

const fetchBooks = async () => {
  try {
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export default fetchBooks;
