import React from 'react';

const BookDetailPage = ({ title, genre, author, isbn, availability }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Author: {author}</p>
      <p>ISBN: {isbn}</p>
      <p>Availability: {availability ? 'Available' : 'Not available'}</p>
    </div>
  );
};

export default BookDetailPage;
