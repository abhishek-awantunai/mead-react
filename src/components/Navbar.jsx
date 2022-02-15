import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink to="/product/234">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/category">Category</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default NavBar;