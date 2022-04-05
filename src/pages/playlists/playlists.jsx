import React from "react";
import "./playlists.styles.css";
import UserDashboard from "../../layout/userDashboard";
import PlayerComponent from "../../components/player/player.components";

const player = [];

class Playlists extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      playlists: [],
      playerData: [],
    };
  }
  getPlaylists = async () => {
    try {
      const res = await fetch(
        `https://cors.bridged.cc/https://api.deezer.com/playlist/${this.props.match.params.id}`
      );
      const data = await res.json();
      console.log(data);
      console.log(data.tracks.data);
      data.tracks.data.map((val) => (
        player.push({
          id: val.id,
          title: val.title,
          cover: val.album.cover,
          preview: val.preview,
        })
      ));

      this.setState({
        playlists: data,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = () => {
    this.getPlaylists();
  };

  render() {
    const { loading, playlists } = this.state;

    return (
      <UserDashboard>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className="new-releases">
            <div>
              <div className="title-intro">
                <h5 className="title">{this.state.playlists.title}</h5>
                <div className="line2 ml-4 mt-3"></div>
              </div>
              <div className="music-card">
                {playlists.tracks.data.map((val, key) => {
                  return (
                    <div className="card-container" key={key}>
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
            </div>
            <PlayerComponent tracks={player} index={0} />
          </div>
        )}
      </UserDashboard>
    );
  }
}

export default Playlists;
