import React from "react";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__categories">
          <p>Categories</p>
          <span>
            <BsThreeDots />
          </span>
        </div>
        <div className="nav__seperator">
          <div className="nav__Collection">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop Style</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">On Sale !</a>
            </li>
          </div>
          <div className="nav__searchBar">
            <input type="text" placeholder="Search your products" />
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
