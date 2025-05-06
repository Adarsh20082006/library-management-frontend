import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Link className='navbar-link' to="/"><h1 className='app-logo'>Library App</h1></Link>
            <nav className="navbar">
                <ul className='navbar-list'>
                    <li className='link-list-item' ><Link className='navbar-link' to="/books">Books</Link></li>
                    <li className='link-list-item' ><Link className='navbar-link' to="/borrowed">Borrowed Books</Link></li>
                    <li className='link-list-item' ><Link className='navbar-link' to="/returned">Returned Books</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;