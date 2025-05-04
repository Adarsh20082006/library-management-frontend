import EachBookItem from "../EachBookItem";
import "./index.css";

const BookList = props => {
    const { books = [] } = props;

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map((book) => (
                    <EachBookItem key={book[0]} book={book} />
                ))}
            </ul>
        </div>
    );
}

export default BookList;