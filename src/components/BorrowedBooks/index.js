import { useContext } from "react";
import { ReturnedContext } from "../../context/ReturnedContext";
import { BorrowedContext } from "../../context/BorrowedContext.js";

const BorrowedBooks = () => {
    const { BorrowedBook, removeBorrowedBook } = useContext(BorrowedContext);
    const { addReturnedBook } = useContext(ReturnedContext)
    const returnedBook = (book) => {
        addReturnedBook(book);
        removeBorrowedBook(book.id);
    }
    return (
        <div className="borrowed-books">
            <h1>Borrowed Books</h1>
            <p>You have borrowed the following books:</p>
            <ul>
                {BorrowedBook.map((book) => (
                    <li key={book.id}>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Category: {book.category}</p>
                        <p>Published Year: {book.publishedYear}</p>
                        <p>Rating: {book.rating}</p>
                        <img src={book.image} alt={book.id} className="book" />
                        <button onClick={() => returnedBook(book)}>Return Book</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BorrowedBooks;