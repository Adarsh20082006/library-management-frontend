import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import BookList from "../BookList";

const FilterItems = () => {
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sQuery, setSQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                axios.get("http://localhost:8000/api/all-books")
                    .then((res) => {
                        const newBooks = [...res.data].slice(0, 50)
                        setBooks(newBooks)
                    })
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);


    const categories = [{ id: 1, name: 'Fiction' }, { id: 2, name: 'Juvenile Fiction' }, { id: 3, name: 'Literary Criticism' }, { id: 4, name: 'Biography & Autobiography' }, { id: 5, name: 'History' }]
    const ratings = [{ id: 1, name: '1 Star' }, { id: 2, name: '2 Stars' }, { id: 3, name: '3 Stars' }, { id: 4, name: '4 Stars' }, { id: 5, name: '5 Stars' }]
    const publishedYears = [{ id: 1, name: '2025' }, { id: 2, name: '2020' }, { id: 3, name: '2015' }, { id: 4, name: '2010' }, { id: 5, name: '2005' }, { id: 6, name: '2000' }, { id: 7, name: 'More oldest' }]

    const handleSearch = (e) => {
        e.preventDefault();
        setSQuery(e.target.value);
    }
    const applyFilters = async () => {
        try {
            axios.get("http://localhost:8000/api/books", {
                params: {
                    category: category,
                    rating: rating,
                    publishedYear: publishedYear,
                    searchQuery: sQuery
                }
            })
                .then((res) => {
                    setBooks([...res.data])
                })
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };


    return (
        <div className="main-container">
            <div className="filter-container">
                <form className="search-container" onSubmit={handleSearch}>
                    <input type="search" placeholder="Book/Author name..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-input" />
                </form>
                <div className="category-container">
                    <h2>Categories</h2>
                    <ul className="category-list">
                        {categories.map((eachCategory) => (<li key={eachCategory.id} className={`category-item ${eachCategory.name === category ? 'active' : ''}`} onClick={() => setCategory(eachCategory.name)}>{eachCategory.name}</li>))}
                    </ul>
                </div>
                <div className="rating-container">
                    <h2>Rating</h2>
                    <ul className="rating-list">
                        {ratings.map((eachRating) => (<li key={eachRating.id} className={`rating-item ${eachRating.name === rating ? 'active' : ''}`} onClick={() => setRating(eachRating.name)}>{eachRating.name}</li>))}
                    </ul>
                </div>
                <div className="year-container">
                    <h2>Published Year</h2>
                    <ul className="year-list">
                        {publishedYears.map((eachYear) => (<li key={eachYear.id} className={`year-item ${eachYear.name === publishedYear ? 'active' : ''}`} onClick={() => setPublishedYear(eachYear.name)}>{eachYear.name}</li>))}
                    </ul>
                </div>
                <button className="clear-filters" onClick={() => { setCategory(''); setRating(''); setPublishedYear(''); setSearchTerm(''); }}>Clear Filters</button>
                <button className="apply-filters" onClick={applyFilters}>Apply Filters</button>
            </div>
            <div className="book-list-container">
                <BookList books={books} />
            </div>
        </div>)

}

export default FilterItems;