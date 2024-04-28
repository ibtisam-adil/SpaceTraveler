import { useDispatch, useSelector } from 'react-redux';
import './rockets.css';
import { useEffect } from 'react';
import { cancelReserve, getRocketData, reserveRocket } from '../../redux/Rocket/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketData());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rocketReducer.rockets);
  return (
    <div className="rocket-container">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="main">
          <img
            className="rocket-img"
            src={rocket.flickr_images}
            alt={rocket.rocket_name}
          />
          <div className="rocket-data">
            <h3 className="header">{rocket.name}</h3>
            <p className="description">
              {rocket.reserved && (
                <span className="reserved">Reserved</span>
              )}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button type="submit" onClick={() => dispatch(cancelReserve(rocket.id))} className="cancel-btn">Cancel Reservation</button>
            ) : (
              <button
                type="submit"
                className="reserve-btn"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
