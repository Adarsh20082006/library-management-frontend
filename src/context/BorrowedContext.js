import { createContext, useState } from "react";

export const BorrowedContext = createContext()

export const BorrowedProvider = ({ children }) => {
    const [BorrowedBook, setBorrowedBook] = useState([])

    const updateBorrowedBook = (book) => {
        setBorrowedBook((prevBooks) => ([...prevBooks, book]))
    }
    const removeBorrowedBook = (bookId) => {
        setBorrowedBook((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    };
    return (
        <BorrowedContext.Provider value={{ BorrowedBook, updateBorrowedBook, removeBorrowedBook }}>
            {children}
        </BorrowedContext.Provider>
    )
}

