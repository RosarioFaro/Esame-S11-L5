import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";
import { Col } from "react-bootstrap";

const FavoriteSongsPage = () => {
  const favoritedSongs = useSelector((state) => state.album.favoritedSongs);

  return (
    <div className="container col py-4 text-white mb-5">
      <h2>Le tue canzoni preferite</h2>
      <div className="row py-3">
        {favoritedSongs.length > 0 ? (
          favoritedSongs.map((song) => (
            <Col xs={6} md={4} lg={3} key={song.id}>
              <AlbumCard singleSong={song} />
            </Col>
          ))
        ) : (
          <p>Non hai ancora aggiunto canzoni ai preferiti.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteSongsPage;
