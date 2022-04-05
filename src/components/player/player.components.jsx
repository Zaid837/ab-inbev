import React from "react";
import "./player.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

class PlayerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
      index: this.props.index,
    };

    this.myRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if(this.props.index !== prevProps.index) {
      console.log("hell yh")
      this.setState({ status: true });
    }
  }

  play = () => {
    this.myRef.current.play();
    this.setState({ status: true });
  };

  pause = () => {
    this.myRef.current.pause();
    this.setState({ status: false });
  };

  prevSong = async () => {
    this.setState({ index: this.state.index + 1 });
    this.myRef.current.play();
  };

  render() {
    const { tracks, index } = this.props;
    return (
      <div className="player">
        <audio
          src={tracks[index].preview}
          style={{ display: "none" }}
          controls
          ref={this.myRef}
          autoPlay
        />
        <div className="player-con">
          <div
            className="song-cover"
            style={{ backgroundImage: `url(${tracks[index].cover})` }}
          ></div>
          <div className="song-info">
            <p className="song-title ml-2">{tracks[index].title}</p>
            <div className="playback-controls ml-4">
              <span>
                <FontAwesomeIcon
                  icon={faStepBackward}
                  className="mr-1"
                  onClick={this.prevSong}
                />
              </span>
              <span>
                {this.state.status ? (
                  <FontAwesomeIcon
                    icon={faPauseCircle}
                    className="mr-1 play-btn"
                    onClick={this.pause}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="mr-1 play-btn"
                    onClick={this.play}
                  />
                )}
              </span>
              <span>
                <FontAwesomeIcon icon={faStepForward} className="mr-1" />
              </span>
            </div>
            <div className="line ml-3 mr-4"></div>
            <span>
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faRandom} className="mr-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faRedo} className="mr-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faVolumeUp} className="mr-2" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerComponent;
