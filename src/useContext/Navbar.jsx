import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    // <>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    //   <Link to="/login">Login</Link>
    // </>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          useContext
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <NavLink to={"/"} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>

          <NavLink to={"/about"} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>

          <NavLink to={"/login"} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Login
          </NavLink>



          </ul>
        </div>
      </div>
    </nav>
  );
};
