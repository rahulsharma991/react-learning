import BookShow from "./BookShow";

function BookList({ books, onDelete, editBook }) {
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
  return <div class='book-list'>{renderedBooks}</div>;
}

export default BookList;
