import EachBookItem from "../EachBookItem";
import "./index.css";

const BookList = props => {
    const { books = [] } = props;

    return (
        <div className="book-list-container">
            <div className="book-list-header">
                <h1 className="book-list-heading">Books list</h1>
                <p className="book-list-description">Click on the book to borrow it...</p>
            </div>
            <ul>
                {books.map((book) => (
                    <EachBookItem key={book[0]} book={book} />
                ))}
            </ul>
        </div>
    );
}

export default BookList;