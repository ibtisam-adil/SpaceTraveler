import './navbar.css';
// import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const Navbar = () => (
  <nav>
    <div className="img-h">
      <img src={logo} alt="logo" className="img" />
      <h2 className="nav-h">Space Traveller&apos;s Hub</h2>
    </div>
    <div className="component-links">
      <div className="link active">
        Rockets
      </div>
      <div className="link">
        Missions
      </div>
      <div className="links-seperator" />
      <div className="link">
        Your Profile
      </div>
    </div>
  </nav>
);

export default Navbar;
