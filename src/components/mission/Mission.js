import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/mission/missionListReducer';
import style from './Mission.module.css';

function Mission() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="super-mission">
      <div className={style.table}>
        <div className={style.tablerow}>
          <div className={style.tablehead}>Mission</div>
          <div className={style.tablehead}>Description</div>
          <div className={style.tablehead}>Status</div>
          <div className={style.tablehead}> </div>
        </div>
        {missions.map((item, index) => (
          <div className={`${style.tablerow}`} style={index % 2 === 0 ? { backgroundColor: '#c0c0c07e' } : { backgroundColor: 'white' }} key={item.mission_id}>
            <div className="mission-container" key={item.mission_id}>
              <div className="contents">
                <div className={style.tablecell}>
                  <h3 className={style.btn}>{item.mission_name}</h3>
                </div>

                <div className={style.desk}>
                  <h4>{item.description}</h4>
                </div>
                <div className={`${style.tablecell} ${style.pad}`}>
                  <button className={`${item.active ? style.activeMember : style.notMember} ${style.btn}`} type="button">{item.active ? 'Active Member' : 'Not a member'}</button>
                </div>
                <div className={style.tablecell}><button className={`${item.active ? style.activeMemberbtn : style.notactiveMemberBtn} ${style.btn}`} id={item.mission_id} type="button">{item.active ? 'Cancel mission' : 'Join mission'}</button></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
