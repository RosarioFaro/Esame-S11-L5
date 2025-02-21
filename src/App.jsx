import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import { Row } from "react-bootstrap";
import Player from "./components/Player";
import { BrowserRouter, Route, Routes } from "react-router";
import FavoriteSongsPage from "./components/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Row>
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/preferiti" element={<FavoriteSongsPage />} />
          </Routes>
        </Row>
        <Player />
      </div>
    </BrowserRouter>
  );
}

export default App;
