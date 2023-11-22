import { Link } from "react-router-dom";
//this is my first commit to the newsapp repo through cloned id.
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        height: "60px",
        padding: "15px 0px",
      }}
    >
      <div className="d-flex justify-content-between w-100">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/NewsApp">
              NewsApp
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Business" className="nav-link">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Entertainment">
              Entertainment
            </Link>
          </li>
        </ul>
        <form className="form-inline mx-3" style={{ display: "flex" }}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ marginRight: "10px" }}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
