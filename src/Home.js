import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./Home.css";

import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="header_left">
          <Link to="/#">About</Link>
          <Link to="/#">Store</Link>
        </div>
        <div className="header_right">
          <Link to="/#">Gmail</Link>
          <Link to="/#">Images</Link>
          <AppsIcon />
          <AccountCircleOutlinedIcon className="acct" />
        </div>
      </div>

      <div className="home_body">
        <img
          src="//www.google.com/logos/doodles/2021/get-vaccinated-wear-a-mask-save-lives-august-19-copy-6753651837109303-2xa.gif"
          alt=""
        />

        <div className="search_container">
          <Search />
        </div>
      </div>
    </div> /* homeclose */
  );
};

export default Home;
