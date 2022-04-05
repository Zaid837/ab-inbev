import React from "react";
import { Link } from "react-router-dom";

const Browse = ({ browse }) => {
  return (
    <div>
      <div className="title-intro">
        <h5 className="title">Browse</h5>
        <div className="line2 ml-4 mt-3"></div>
      </div>

      <div className="music-card">
        {browse.map((val) => {
          return (
            <Link
              to={`#`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div className="card-container">
                <div className="image">
                  <img
                    key={val.id}
                    src={val.cover}
                    alt="music-cover"
                    className="music-cover"
                  />
                </div>
                <p className="name" key={val.id}>
                  {val.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Browse;
