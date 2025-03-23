import './styles/Header.css'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <img src='/kitty-face.svg' style={{ width: '1.5em' }} alt="Logo" /> My Kitty
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;