import React from 'react';

import Trip from '../trip';

import style from './ticket.module.scss';

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  const trips = segments.map((trip, i) => {
    return <Trip trip={trip} key={i} />;
  });
  return (
    <div className={style.ticket}>
      <div className={style.header}>
        <p className={style.price}>{new Intl.NumberFormat('ru-RU').format(price)} Р</p>
        <img
          className={style.logo}
          src={`http://pics.avs.io/99/36/${carrier}.png`}
          alt={'Логотип авиакомпании ' + carrier}
        />
      </div>
      {trips}
    </div>
  );
};

export default Ticket;
