import { React } from 'react';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';

function MyRockets() {
  const rockets = useSelector((state) => state.rockets.rockets).filter(
    (rocket) => rocket.reserved === true,
  );
  return (
    <div className={style.mymission}>
      <h1>My Rockets</h1>
      <ul className={style.table}>
        {rockets.length > 0 && rockets.map((item) => (
          <li key={item.id}><p>{item.name}</p></li>
        ))}

        {rockets.length < 1 && <li><p>No reserved rocket yet</p></li>}
      </ul>
    </div>
  );
}
export default MyRockets;
