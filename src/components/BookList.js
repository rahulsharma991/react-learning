import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";
function BookList({ books, onDelete, editBook }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        onDelete={onDelete}
        key={books.id}
        book={book}
        editBook={editBook}
      />
    );
  });
  return (
    <div className='book-list'>
      {count}
      <button onClick={incrementCount}>Click</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
