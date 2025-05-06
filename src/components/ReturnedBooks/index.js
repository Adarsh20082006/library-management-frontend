import { useContext } from "react";
import { ReturnedContext } from "../../context/ReturnedContext";
import './index.css';

const ReturnedBooks = () => {
    const { returnedBooks } = useContext(ReturnedContext)
    return (
        <div className="returned-books">
            <h1>Returned Books</h1>
            {returnedBooks.length > 0 ? <p>You have return the following books:</p> : <p>You have not returned any books yet.</p>}
            <ul>
                {returnedBooks.map((book) => (
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
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ReturnedBooks;
