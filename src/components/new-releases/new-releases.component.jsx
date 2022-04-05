import React from "react";
import "./new-releases.styles.css";
import PlayerComponent from "../../components/player/player.components";
import { useState } from "react";

const NewReleases = ({ tracks }) => {

  const [index, setIndex] = useState(0);
  const [play, playStatus] = useState(false);

  const playerData = [];
  tracks.map((val) => (
    playerData.push({
      id: val.id,
      title: val.title,
      cover: val.album.cover,
      preview: val.preview,
    })
  ));

  const getSongId = (key) => {
    setIndex(key);
    playStatus(false);
  };

  // console.log(playerData);
  return (
    <div>
      <div className="title-intro">
        <h5 className="title">Released this week</h5>
        <div className="line2 ml-4 mt-3"></div>
      </div>
      <div className="music-card">
        {tracks.map((val, key) => {
          return (
            <div
              className="card-container"
              key={key}
              onClick={() => {
                getSongId(key);
              }}
            >
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
      <PlayerComponent tracks={playerData} index={index} status={play} />
    </div>
  );
};

export default NewReleases;
