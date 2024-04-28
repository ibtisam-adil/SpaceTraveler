import './navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';

const Navbar = () => (
  <nav>
    <div className="img-h">
      <img src={logo} alt="logo" className="img" />
      <h2 className="nav-h">Space Traveller&apos;s Hub</h2>
    </div>
    <div className="component-links">
      <NavLink to="/rockets" className="link" activeClassName="active">
        Rockets
      </NavLink>
      <div className="link">
        Missions
      </div>
      <div className="links-seperator" />
      <NavLink to="/profile" className="link" activeClassName="active">
        My Profile
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
