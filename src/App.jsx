import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import { Row } from "react-bootstrap";
import Player from "./components/Player";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Sidebar />
          <MainPage />
        </Row>
        <Player />
      </div>
    </>
  );
}

export default App;
