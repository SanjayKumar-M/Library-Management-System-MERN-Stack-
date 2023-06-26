import React from 'react';
import BookDetailPage from './Pages/BookDetailPage';
import BookViewPage from './Pages/BookViewPage';
import Navbar from './Components/Navbar';

const App = () => {
  
  const book = {
    title: 'Book 1',
    genre: 'Fiction',
    author: 'Author 1',
    isbn: '1234567890',
    availability: true,
  };

  return (
    <div>
      <Navbar />
      <h1>Library Management System</h1>
      
      <BookViewPage />

      
      <BookDetailPage
        title={book.title}
        genre={book.genre}
        author={book.author}
        isbn={book.isbn}
        availability={book.availability}
      />
    </div>
  );
};

export default App;
