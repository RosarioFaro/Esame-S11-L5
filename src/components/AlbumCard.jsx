import { useDispatch } from "react-redux";
import { setCurrentSong } from "../redux/actions";

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentSong(singleSong));
  };

  return (
    <div className="col text-center" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img className="img-fluid" src={singleSong.album.cover_medium} alt="album cover" />
      <p>
        Track: {singleSong.title}
        <br />
        Artist: {singleSong.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
