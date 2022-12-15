import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rocket/rocketListReducer';

function Rocket() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      {rockets.map((item) => (
        <div className="details-container" key={item.id}>
          <div className="contents">
            <div className="rocket_image">
              <img src={item.flickr_images} alt="" />
            </div>
            <div className="mission_name">
              <h3>{item.rocket_name}</h3>
            </div>

            <div className="description">
              <h4>{item.description}</h4>
            </div>
            <div className="rocket_button">
              <button type="submit">Add Rocket</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rocket;
