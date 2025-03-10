import React from 'react';

import FilterTransplant from '../filterTransplant';
// import Ticket from '../Ticket';
import FilterTickets from '../filterTickets/filterTickets';
import Button from '../Button';
import Ticket from '../ticket';

import style from './app.module.scss';
import logo from './Logo.svg';

const App = () => {
  return (
    <div className={style.search}>
      <img className={style.logo} src={logo} alt="логотип авиасейлс" />
      <div className={style.main}>
        <FilterTransplant />
        <div className={style.info}>
          <FilterTickets />
          <Ticket />
          <Button text={'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!'} />
        </div>
      </div>
    </div>
  );
};

export default App;
