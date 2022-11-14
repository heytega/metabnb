import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logo.svg";
// import Button from "../button/Button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="navbar-container">
      <div className="navbar">
        <img src={Logo} alt="logo" />
        <ul className="mainMenu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/placetobe">Place to stay</a>
          </li>
          <li>
            <a href="#">NFTs</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
        <a href="#" className="menu-connect-wallet">
          <button className="button">Connect wallet</button>
        </a>

        <button className="menu-button" onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {openMenu && (
        <div className="sideMenu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/placetobe">Place to stay</a>
            </li>
            <li>
              <a href="#">NFTs</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          <a href="#" className="connect-wallet">
            <button className="button">Connect wallet</button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
