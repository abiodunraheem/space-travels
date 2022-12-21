import { React } from 'react';
import { useSelector } from 'react-redux';
import style from './Profile.module.css';

function MyMissions() {
  const missionList = useSelector((state) => state.missions.missions).filter(
    (rocket) => rocket.active === true,
  );
  return (
    <div className={style.mymission}>
      <h1>My Mission</h1>
      <ul className={style.table}>
        {missionList.length > 0 && missionList.map((item) => (
          <li key={item.mission_id}><p>{item.mission_name}</p></li>
        ))}

        {missionList.length < 1 && <li><p>No reserved mission yet</p></li>}
      </ul>
    </div>
  );
}
export default MyMissions;
