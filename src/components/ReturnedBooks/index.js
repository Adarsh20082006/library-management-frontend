import { useContext } from "react";
import { ReturnedContext } from "../../context/ReturnedContext";

const ReturnedBooks = () => {
    const { returnedBooks } = useContext(ReturnedContext)
    return (
        <div className="returned-books">
            <h1>Returned Books</h1>
            <p>You have return the following books:</p>
            <ul>
                {returnedBooks.map((book) => (
                    <li key={book.id}>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Category: {book.category}</p>
                        <p>Published Year: {book.publishedYear}</p>
                        <p>Rating: {book.rating}</p>
                        <img src={book.image} alt={book.id} className="book" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ReturnedBooks;
