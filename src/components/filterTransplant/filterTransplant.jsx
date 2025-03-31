import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { choiceTransfer } from '../../store/ticketsSlice';

import style from './filterTransplant.module.scss';

const FilterTransplant = () => {
  const refTAll = useRef(document.getElementById('AllTransfer'));
  const refT0 = useRef(document.getElementById('0transfer'));
  const refT1 = useRef(document.getElementById('1transfer'));
  const refT2 = useRef(document.getElementById('2transfers'));
  const refT3 = useRef(document.getElementById('3transfers'));

  const dispatch = useDispatch();

  function getFormData() {
    const dataTest = [
      refTAll.current.checked ? 'AllTransfer' : -1,
      refT0.current.checked ? 0 : -1,
      refT1.current.checked ? 1 : -1,
      refT2.current.checked ? 2 : -1,
      refT3.current.checked ? 3 : -1,
    ];

    dispatch(choiceTransfer({ filters: dataTest }));
  }

  const onchangeAllFilters = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      refT0.current.checked = true;
      refT1.current.checked = true;
      refT2.current.checked = true;
      refT3.current.checked = true;
    } else {
      refT0.current.checked = false;
      refT1.current.checked = false;
      refT2.current.checked = false;
      refT3.current.checked = false;
    }
    getFormData();
  };

  const onchangeAllTransfer = (e) => {
    e.preventDefault();
    refTAll.current.checked = !!(
      refT0.current.checked &&
      refT1.current.checked &&
      refT2.current.checked &&
      refT3.current.checked
    );
    getFormData();
  };

  return (
    <form className={style.filter}>
      <fieldset>
        <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
        <div>
          <input
            type="checkbox"
            id="AllTransfer"
            name="AllTransfer"
            ref={refTAll}
            onInput={(event) => onchangeAllFilters(event)}
          />
          <label htmlFor="AllTransfer">Все</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="0transfer"
            name="0transfer"
            ref={refT0}
            onInput={(event) => onchangeAllTransfer(event)}
          />
          <label htmlFor="0transfer">Без пересадок</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="1transfer"
            name="1transfer"
            ref={refT1}
            onInput={(event) => onchangeAllTransfer(event)}
          />
          <label htmlFor="1transfer">1 пересадка</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="2transfers"
            name="2transfers"
            ref={refT2}
            onInput={(event) => onchangeAllTransfer(event)}
          />
          <label htmlFor="2transfers">2 пересадки</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="3transfers"
            name="3transfers"
            ref={refT3}
            onInput={(event) => onchangeAllTransfer(event)}
          />
          <label htmlFor="3transfers">3 пересадки</label>
        </div>
      </fieldset>
    </form>
  );
};

export default FilterTransplant;
