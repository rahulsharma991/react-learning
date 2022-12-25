import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = async (id, newTitle) => {
    let response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const editedBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(editedBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updateBooks = [...books, response.data];
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
