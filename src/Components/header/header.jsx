import React from "react";
import "./header.css";
import { HashLink } from "react-router-hash-link";
const vg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png";
const header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <HashLink to="/">
          <img className="header__icon" src={vg} alt="imdb-logo" />
        </HashLink>
        <HashLink to={"/movies/popular"} style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </HashLink>
        <HashLink to={"/movies/top_rated"} style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </HashLink>
        <HashLink to={"/movies/upcoming"} style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </HashLink>
      </div>
    </div>
  );
};

export default header;
