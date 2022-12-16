import { useState } from "react";
import React from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = (id, newTitle) => {
    const editedBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(editedBooks);
  };
  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updateBooks);
  };
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        editBook={editBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
