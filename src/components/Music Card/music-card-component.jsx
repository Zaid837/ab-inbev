import React from "react";
import "./music-card.styles.css";

class MusicCard extends React.Component {
  render() {
    return (
      <div className="music-card">
        {this.props.tracks.map((val) => {
          return (
            <div className="card-container">
              <div className="image">
                <img
                  key={val.id}
                  src={val.album.cover}
                  alt="music-cover"
                  className="music-cover"
                />
              </div>
              <p className="name" key={val.id}>
                {val.title}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MusicCard;
