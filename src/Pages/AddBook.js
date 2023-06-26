import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/addbook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [availability, setAvailability] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      genre,
      author,
      ISBN,
      thumbnail,
      availability,
    };
    axios
      .post('http://localhost:5000/api/books', newBook)
      .then((response) => {
        console.log(response.data);
        // Reset form fields
        setTitle('');
        setGenre('');
        setAuthor('');
        setISBN('');
        setThumbnail('');
        setAvailability(true);
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>ISBN:</label>
          <input
            type="text"
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Thumbnail:</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Availability:</label>
          <input
            type="checkbox"
            checked={availability}
            onChange={(e) => setAvailability(e.target.checked)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;


