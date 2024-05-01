import React, { useEffect } from 'react';
import './Mission.css';
import { useDispatch, useSelector } from 'react-redux';
import { cancelMission, fetchMission, joinMission } from '../../redux/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missionReducer.mission);
  const isLoading = useSelector((state) => state.missionReducer.isLoading);
  const error = useSelector((state) => state.missionReducer.error);

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main-table">
      <table className="mission-table">
        <thead className="thead">
          <tr>
            <th>Mission</th>
            <th>description</th>
            <th>Status</th>
            <th>join/leave</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e, id) => (
            <tr key={e.mission_name}>
              <td className="name">{e.mission_name}</td>
              <td className="desc">{e.description}</td>
              <td className="para">
                {e.isReserved ? <p>Active Member</p>
                  : <p>Not a Member</p> }
              </td>
              <td className="joinM">
                {e.isReserved ? <button onClick={() => dispatch(cancelMission(id))} type="button">cancel Mission</button>
                  : <button onClick={() => dispatch(joinMission(id))} type="button">Join Mission</button> }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
