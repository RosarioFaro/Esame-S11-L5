import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteSong, setCurrentSong } from "../redux/actions";
import { HeartFill, Heart } from "react-bootstrap-icons";

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();
  const favoritedSongs = useSelector((state) => state.album.favoritedSongs);

  const isFavorited = favoritedSongs.some((song) => song.id === singleSong.id);

  const handleFavorite = (e) => {
    e.stopPropagation();
    dispatch(toggleFavoriteSong(singleSong));
  };

  const handleSongClick = () => {
    dispatch(setCurrentSong(singleSong));
  };

  return (
    <div className="col text-center position-relative" onClick={handleSongClick}>
      <div className="card-content position-relative">
        <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
        <p>
          Track: {singleSong.title}
          <br />
          Artist: {singleSong.artist.name}
        </p>

        <button onClick={handleFavorite} className="btn btn-link position-absolute top-0 end-0 m-2">
          {isFavorited ? <HeartFill color="green" size={24} /> : <Heart color="gray" size={24} />}
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;
