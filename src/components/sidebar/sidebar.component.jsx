import React from "react";
import "./sidebar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../assets/images/avatar.svg";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-items text-center text-white">
        <img src={Avatar} alt="avatar" className="avatar" />
        <p className="username mt-3 mb-5">Zaid</p>

        <div className="mt-3">
          <ul className="list-unstyled">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <li className="sidelist m-2 p-3">
                <FontAwesomeIcon icon={faHeadphones} className="icon mr-3" />
                <span>Discover</span>
              </li>
            </Link>

            <li className="sidelist m-2 p-3">
              <FontAwesomeIcon icon={faSearch} className="icon mr-3" />
              <span>Search</span>
            </li>
            <li className="sidelist m-2 p-3">
              <FontAwesomeIcon icon={faHeart} className="icon mr-3" />
              <span>Favourites</span>
            </li>
            <li className="sidelist m-2 p-3">
              <FontAwesomeIcon icon={faPlayCircle} className="icon mr-3" />
              <span>Playlists</span>
            </li>
            <li className="sidelist m-2 p-3">
              <FontAwesomeIcon icon={faChartLine} className="icon mr-3" />
              <span>Charts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
