import React from 'react';
import { Alert, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTickets, showMoreTickets } from '../../store/ticketsSlice';
import FilterTransplant from '../filterTransplant';
import FilterTickets from '../filterTickets/filterTickets';
import Ticket from '../ticket';
import logo from '../../imgs/Logo.svg';

import style from './app.module.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  const {
    tickets: allTickets,
    filteredTickets: tickets,
    ticketsCount,
    flagStop,
    searchId,
    status,
    error,
  } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!flagStop) dispatch(fetchTickets(searchId));
  }, [allTickets, status]);

  let content = null;
  if (tickets.length !== 0) {
    content = tickets.slice(0, ticketsCount).map((ticket, i) => {
      return <Ticket ticket={ticket} key={i} />;
    });
  } else content = <Alert message={'Рейсов, подходящих под заданные фильтры, не найдено'} type="info" />;

  return (
    <div className={style.search}>
      <img className={style.logo} src={logo} alt="логотип авиасейлс" />
      <div className={style.main}>
        <FilterTransplant />
        <div className={style.info}>
          <FilterTickets />
          {!flagStop || (!error && status === 'loading') ? (
            <Spin tip="Ищем билеты...">
              <div
                style={{
                  width: 310,
                  height: 90,
                }}
              ></div>
            </Spin>
          ) : null}
          {content}
          <button
            className={style.button}
            onClick={() => dispatch(showMoreTickets({ ticketsCount: ticketsCount + 5 }))}
          >
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
