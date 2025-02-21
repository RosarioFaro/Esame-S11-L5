import { useState } from "react";
import { useDispatch } from "react-redux";
import { setArtistSongs } from "../redux/actions";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import iconLogo from "../assets/logo.png";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setArtistSongs(search, data.slice(0, 4)));
        setSearch("");
      } else {
        throw new Error("Errore nella ricerca");
      }
    } catch (err) {
      console.log("Errore", err);
    }
  };

  return (
    <aside className="col col-2">
      <Navbar expand="md" fixed="left" className="flex-column align-items-start" id="sidebar">
        <Navbar.Brand href="index.html">
          <img src={iconLogo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column mb-auto">
            <Nav.Link href="#" className="d-flex align-items-center">
              <HouseDoorFill className="me-2" /> Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center">
              <BookFill className="me-2" /> Your Library
            </Nav.Link>
            <Form className="mt-3" onSubmit={handleSearch}>
              <Form.Group className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="outline-secondary" size="sm" type="submit">
                  GO
                </Button>
              </Form.Group>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-btn d-flex flex-column ">
          <Button variant="primary" className="signup-btn">
            Sign Up
          </Button>
          <Button variant="secondary" className="login-btn">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
