import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("Email");

  const Logout = () => {
    window.localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">SignIn</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/addproducts">Add Products</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {" "}
          {auth ? (
            <Link onClick={Logout} to="/signup">
              Logout
            </Link>
          ) : (
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
