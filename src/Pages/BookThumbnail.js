import React from 'react';

const BookThumbnail = ({ title, genre, author }) => {
  return (
    <div className="thumbnail">
      <h3>{title}</h3>
      <p>Genre: {genre}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default BookThumbnail;
