// bin/seeds.js

const mongoose = require('mongoose');
const Book = require('../models/Book.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/library-project';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// PASTE HERE THE LIST OF BOOKS PROVIDED IN THIS GIST: https://gist.github.com/ironhack-edu/2816267a015d4870f95275cb873d33b6

// const books = [...]

Book.create(books)
  .then(booksFromDB => {
    console.log(`Created ${booksFromDB.length} books`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
