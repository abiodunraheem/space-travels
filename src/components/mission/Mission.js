import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/mission/missionListReducer';

function Mission() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div>
      <h2>Mission</h2>
      {missions.map((item) => (
        <div className="details-container" key={item.mission_id}>
          <div className="contents">
            <div className="mission_name">
              <h3>{item.mission_name}</h3>
            </div>

            <div className="description">
              <h4>{item.description}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mission;
