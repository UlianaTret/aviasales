import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { showCheapest, showOptimal } from '../../store/ticketsSlice';
import { showFastest } from '../../store/ticketsSlice';

import style from './filterTickets.module.scss';

const FilterTickets = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();
  return (
    <div className={style.filter}>
      <button onClick={() => dispatch(showCheapest({ tickets: tickets }))}>САМЫЙ ДЕШЕВЫЙ</button>
      <button onClick={() => dispatch(showFastest({ tickets: tickets }))}>САМЫЙ БЫСТРЫЙ</button>
      <button onClick={() => dispatch(showOptimal({ tickets: tickets }))}>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
};

export default FilterTickets;
