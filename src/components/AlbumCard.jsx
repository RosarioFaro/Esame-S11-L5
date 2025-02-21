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
    <div className="col text-center " onClick={handleSongClick}>
      <div className="card-content position-relative">
        <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
        <p>
          Track: {singleSong.title_short}
          <br />
          Artist: {singleSong.artist.name}
        </p>

        <button onClick={handleFavorite} className="btn btn-link position-absolute top-0 end-0 m-1">
          {isFavorited ? (
            <HeartFill color="green" width={30} height={30} />
          ) : (
            <Heart color="gray" width={30} height={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;
