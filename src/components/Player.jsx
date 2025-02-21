import { useSelector } from "react-redux";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";
import { ProgressBar } from "react-bootstrap";

const Player = () => {
  const currentSong = useSelector((state) => state.album.selectedSong);

  if (!currentSong) {
    return <div></div>;
  }

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-md-2 offset-md-2">
          <div className="albumPlayer d-flex align-items-center mb-3 text-white">
            <img
              src={currentSong.album.cover_medium}
              alt="Album Cover"
              className="img-fluid rounded"
              style={{ width: "80px", height: "80px" }}
            />
            <div className="ms-3">
              <h5>{currentSong.title}</h5>
              <p>{currentSong.artist.name}</p>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffleIcon} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prevIcon} alt="prev" />
                </a>
                <a href="#">
                  <img src={playIcon} alt="play" />
                </a>
                <a href="#">
                  <img src={nextIcon} alt="next" />
                </a>
                <a href="#">
                  <img src={repeatIcon} alt="repeat" />
                </a>
              </div>
              <ProgressBar className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
