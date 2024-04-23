import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signUp">SignUP</NavLink>
            <NavLink to="/signIn">Sign IN</NavLink>
            <NavLink to="/addCoffee">Add </NavLink>
        </div>
    );
};

export default Header;