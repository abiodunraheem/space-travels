import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rocket/rocketListReducer';
import './rocket.css';

function Rocket() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  // const handleBooking = (e) => {
  //   const { id } = e.target;
  //   useEffect(() => {
  //     if (rockets.reserved) {
  //       dispatch(CancelRocketBooking(id));
  //     } else {
  //       dispatch(fetchRockets());
  //     }
  //   }, [dispatch]);
  // };

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      {rockets.map((item) => (
        <div className="rocket" key={item.id}>
          <div className="rocketLeft">
            <img src={item.flickr_images} alt="" />
          </div>
          <div className="rocketRight">
            <h2>{item.rocket_name}</h2>
            {rockets.reserved
              ? (
                <>
                  <p>
                    <small className="reservedbtn">Reserved</small>
                    {rockets.description}
                  </p>
                  <button className="cancelReserve" id={item.id} type="button">Cancel Reservation</button>
                </>
              )
              : (
                <>
                  <p>{item.description}</p>
                  <button id={item.id} type="button">Reserve Rocket</button>
                </>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rocket;
