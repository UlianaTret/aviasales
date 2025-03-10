import React from 'react';

import Trip from '../trip';

import style from './ticket.module.scss';
import logoS7 from './S7_Logo.svg';

const Ticket = () => {
  return (
    <div className={style.ticket}>
      <div className={style.header}>
        <p className={style.price}>13 400 Р</p>
        <img className={style.logo} src={logoS7} alt="Логотип авиакомпании" />
      </div>
      <Trip />
      <Trip />
    </div>
  );
};

export default Ticket;
