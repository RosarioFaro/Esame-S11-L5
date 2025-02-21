import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const ArtistSongs = () => {
  const artistSongs = useSelector((state) => state.album.artistSongs);

  return (
    <div className="my-4">
      {Object.keys(artistSongs).map((artistName) => (
        <div key={artistName}>
          <h3 className="text-capitalize">Results for: {artistName}</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {artistSongs[artistName].map((song) => (
              <AlbumCard key={song.id} singleSong={song} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistSongs;
