import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';

const EditBook = ({ book, onEditBook }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setISBN] = useState('');
  const [bookCover, setBookCover] = useState('');
  const [availability, setAvailability] = useState(false);

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setGenre(book.genre);
      setAuthor(book.author);
      setISBN(book.isbn);
      setBookCover(book.bookCover);
      setAvailability(book.availability);
    }
  }, [book]);

  const handleEditBook = () => {
    const updatedBook = {
      ...book,
      title,
      genre,
      author,
      isbn,
      bookCover,
      availability,
    };
    onEditBook(updatedBook);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <TextField
        label="ISBN"
        value={isbn}
        onChange={(e) => setISBN(e.target.value)}
      />
      <TextField
        label="Book Cover"
        value={bookCover}
        onChange={(e) => setBookCover(e.target.value)}
      />
      <TextField
        label="Availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.checked)}
        type="checkbox"
      />
      <Button variant="contained" color="primary" onClick={handleEditBook}>
        Edit Book
      </Button>
    </div>
  );
};

export default EditBook;


