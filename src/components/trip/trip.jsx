import React from 'react';

import style from './trip.module.scss';

const Trip = () => {
  return (
    <div className={style.trip}>
      <div>
        <p>MOW – HKT</p>
        <p>11:20 – 00:50</p>
      </div>
      <div>
        <p>В ПУТИ</p>
        <p>13ч 30м</p>
      </div>
      <div>
        <p>1 ПЕРЕСАДКА</p>
        <p>HKG</p>
      </div>
    </div>
  );
};

export default Trip;
