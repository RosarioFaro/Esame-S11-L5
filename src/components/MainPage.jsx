import ArtistSongs from "./ArtistSongs";
import MusicList from "./MusicList";

const MainPage = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage mb-5">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <ArtistSongs />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <MusicList artistName="caparezza" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <MusicList artistName="arcane" />
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-10">
          <div id="hiphop">
            <MusicList artistName="eminem" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
