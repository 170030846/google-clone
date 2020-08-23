import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
// import Avatar from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/* link */}
          {/* link */}
        </div>
        <div className="home__headerRight">
          {/* link */}
          {/* link */}
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>

        {/* icon */}  
        {/* avatar */}
        {/* <Avatar /> */}
      </div>

      {/* home body */}
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          {/* search */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
