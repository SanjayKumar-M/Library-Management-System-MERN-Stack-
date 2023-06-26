import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

import '../Styles/bookview.css';

const BookViewPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  

  return (
    <div className="book-view-container">
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book._id}>
            <Card className="book-card">
              <CardMedia component="img" height="200" image={book.thumbnail} alt={book.title} />
              <CardContent>
                <Typography variant="h6" className="book-title" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="body1" className="book-info" color="textSecondary">
                  Category: {book.genre}
                </Typography>
                <Typography variant="body1" className="book-info" color="textSecondary">
                  ISBN: {book.ISBN}
                </Typography>
                <Typography variant="body1" className="book-info" color="textSecondary">
                  Author: {book.author}
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookViewPage;
