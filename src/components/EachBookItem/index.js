import { useContext } from "react";
import { BorrowedContext } from "../../context/BorrowedContext.js";

const EachBookItem = props => {
    const { book } = props;
    const { BorrowedBook, updateBorrowedBook } = useContext(BorrowedContext);
    const filteredBook = { id: book[0], id2: book[1], title: book[2], subtitle: book[3], author: book[4], category: book[5], image: book[6], description: book[7], publishedYear: book[8], rating: book[9] };

    return (
        <div className="book-item">
            <h2>{filteredBook.title}</h2>
            <p>{filteredBook.description}</p>
            <p>Author: {filteredBook.author}</p>
            <p>Category: {filteredBook.category}</p>
            <p>Published Year: {filteredBook.publishedYear}</p>
            <p>Rating: {filteredBook.rating}</p>
            <p>Subtitle: {filteredBook.subtitle}</p>
            <img src={filteredBook.image} alt={filteredBook.id} className="book" />
            {BorrowedBook.length >= 3 ? <button className="borrow-button" disabled>Already Borrowed</button> : BorrowedBook.find((eachBook) => eachBook.id === filteredBook.id) === undefined ? <button className="borrow-button" onClick={() => updateBorrowedBook(filteredBook)}>Borrow</button> : <button className="borrow-button" disabled>Already Borrowed</button>}
        </div>
    );
}
export default EachBookItem;