import React from 'react';

import Navbar from './Components/Navbar';

import AddBook from './Pages/AddBook';
import BookViewPage from './Pages/BookViewPage';
import EditBook from './Pages/EditBook';

const App = () => {
  


  return (
    <div>
      <Navbar />
   
     <BookViewPage />
     
    </div>
  );
};

export default App;
