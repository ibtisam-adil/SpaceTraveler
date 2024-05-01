import { useSelector } from 'react-redux';
import './profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketReducer.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missionReducer.mission);
  const reservedMission = missions.filter((mission) => mission.isReserved);
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
      <div className="rocket-detail">
        <h3 className="rocket-heading">My Missions</h3>
        <div className="show-rockets">
          {reservedMission.map((e) => (
            <div className="res" key={e.id}>{e.mission_name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
