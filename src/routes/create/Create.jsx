import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState({
    title: '',
    isbn: '',
    cover: '',
    author: '',
    published: '',
    pages: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add a new book
      await axios.post('http://localhost:3000/data', newBook);

      // Optionally, you can handle success, e.g., redirect to another page
      navigate('/');
    } catch (error) {
      console.error('Error adding new book:', error);
      // Optionally, handle errors, show a message, etc.
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={newBook.title} onChange={handleInputChange} required />

        {/* Add other form fields similarly */}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Create;
