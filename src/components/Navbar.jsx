import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Blog
        </NavLink>
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/AboutUs">About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/posts">Post</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
