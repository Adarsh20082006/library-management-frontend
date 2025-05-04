import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>Library App</h1>
            <nav className="navbar">
                <ul>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/borrowed">Borrowed Books</Link></li>
                    <li><Link to="/returned">Returned Books</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;