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
            <h1 className="borrowed-heading">Borrowed Books</h1>
            {BorrowedBook.length > 0 ? <p className="borrowed-description">You have borrowed the following books:</p> : <p>You haven't borrowed any books!!!</p>}
            <ul>
                {BorrowedBook.map((book) => (
                    <li className="book-list" key={book.id}>
                        <div className="book-card-container">
                            <div className="book-image">
                                <img src={book.image} alt={book.title} />
                            </div>
                            <div className="book-description-container">
                                <div className="book-header">
                                    <h1 className="book-title">{book.title}</h1>
                                    <h2 className="book-author">by {book.author}</h2>
                                </div>
                                <p className="book-rating">{Math.ceil(book.rating)} star rating</p>
                                <p className="book-category">{book.category} category</p>
                                <p className="book-published-year">Published at {book.publishedYear}</p>

                                <p className="book-description">{`${book.description.split(" ").slice(0, 80).join(" ")}...`}</p>
                                <button className="borrow-buttons" onClick={() => returnedBook(book)}>Return Book</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BorrowedBooks;