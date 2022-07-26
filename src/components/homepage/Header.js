import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import profile from "../../assets/profile.png";

function Header() {
  return (
    <div className="header">
      <div className="search">
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="Enter title" />
      </div>
      <div id="profile-images">
        <img src={profile} alt="profile" />
        <img src={profile} alt="profile" />
        <img src={profile} alt="profile" />
        <img src={profile} alt="profile" />
        <img src={profile} alt="profile" />
      </div>
      <div className="profile">
        <span>Hi User</span>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Header;
