import { useContext } from "react";
import { BorrowedContext } from "../../context/BorrowedContext.js";
import "./index.css";

const EachBookItem = props => {
    const { book } = props;
    const { BorrowedBook, updateBorrowedBook } = useContext(BorrowedContext);
    const filteredBook = { id: book[0], id2: book[1], title: book[2], subtitle: book[3], author: book[4], category: book[5], image: book[6], description: book[7], publishedYear: book[8], rating: book[9] };

    return (
        <div className="book-card-container">
            <div className="book-image">
                <img src={filteredBook.image} alt={filteredBook.title} />
            </div>
            <div className="book-description-container">
                <div className="book-header">
                    <h1 className="book-title">{filteredBook.title}</h1>
                    <h2 className="book-author">by {filteredBook.author}</h2>
                </div>
                <p className="book-rating">{Math.ceil(filteredBook.rating)} star rating</p>
                <p className="book-category">{filteredBook.category} category</p>
                <p className="book-published-year">Published at {filteredBook.publishedYear}</p>

                <p className="book-description">{`${filteredBook.description.split(" ").slice(0, 80).join(" ")}...`}</p>

                {BorrowedBook.length >= 3 ? <button className="borrow-button disabled" disabled>Already Borrowed</button> : BorrowedBook.find((eachBook) => eachBook.id === filteredBook.id) === undefined ? <button className="borrow-button" onClick={() => updateBorrowedBook(filteredBook)}>Borrow</button> : <button className="borrow-button disabled" disabled>Already Borrowed</button>}
            </div>
        </div>
    );
}
export default EachBookItem;