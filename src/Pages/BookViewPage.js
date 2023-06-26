import React from 'react';
import BookThumbnail from './BookThumbnail';

const BookViewPage = () => {
  // Sample book data
  const books = [
    {
      title: 'Book 1',
      genre: 'Fiction',
      author: 'Author 1',
    },
    {
      title: 'Book 2',
      genre: 'Mystery',
      author: 'Author 2',
    },
   
  ];

  return (
    <div>
      <h2>Book View Page</h2>
      <div className="thumbnail-container">
        {books.map((book, index) => (
          <BookThumbnail
            key={index}
            title={book.title}
            genre={book.genre}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
};

export default BookViewPage;
