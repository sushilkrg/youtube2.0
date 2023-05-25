import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import MenuItems from "./MenuItems";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Trending</li>
        <li>Live</li>
        <li>Library</li>
        <li>History</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>

      {/* <MenuItems /> */}
    </div>
  );
};

export default Sidebar;
