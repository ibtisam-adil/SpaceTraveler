import { useSelector } from 'react-redux';
import './profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketReducer.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile">
      <div className="rocket-detail">
        <h3 className="rocket-heading">My Rockets</h3>
        <div className="show-rockets">
          {reservedRockets.map((rocket) => (
            <div className="res" key={rocket.id}>{rocket.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
