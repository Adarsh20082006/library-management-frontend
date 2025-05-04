import { createContext, useState } from 'react';

export const ReturnedContext = createContext();

export const ReturnedProvider = ({ children }) => {
    const [returnedBooks, setReturnedBooks] = useState([]);

    const addReturnedBook = (book) => {
        setReturnedBooks((prevBooks) => [...prevBooks, book]);
    };



    return (
        <ReturnedContext.Provider value={{ returnedBooks, addReturnedBook }}>
            {children}
        </ReturnedContext.Provider>
    );
}