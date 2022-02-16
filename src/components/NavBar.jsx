import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li>
                <NavLink to="/home">Go to Home page</NavLink>
            </li>
            <li>
                <NavLink to="/product">Go to Product page</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;