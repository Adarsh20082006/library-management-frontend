import './index.css'

const Home = () => {
    return (
        <div className='home-main-container'>
            <h1 className="title">Library App</h1>
            <p className="description">Welcome to the Library App. You can borrow and return books.</p>
            <p className="description">Use the navigation bar to access different sections of the app.</p>
            <p className="description">Use the filter items to search for books by title, author, or category.</p>
            <p className="description">Click on a book to view its details and borrow it.</p>
            <p className="description">Once you have finished reading a book, you can return it.</p>
        </div>
    )
}

export default Home;