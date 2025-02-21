import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlbums } from "../redux/actions";
import AlbumCard from "./AlbumCard";

const MusicList = ({ artistName }) => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album.albums[artistName]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (response.ok) {
          const { data } = await response.json();
          console.log(data);
          dispatch(setAlbums(artistName, data.slice(0, 4)));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchAlbums();
  }, [dispatch, artistName]);

  return (
    <>
      <h2 className="text-capitalize">{artistName}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {albums && albums.map((album) => <AlbumCard key={album.id} singleSong={album} />)}
      </div>
    </>
  );
};

export default MusicList;
