import React from 'react';

import style from './filterTransplant.module.scss';
// import Button from '../Button';

const FilterTransplant = () => {
  return (
    <div className={style.filter}>
      <div>
        <label htmlFor="input-transfers">ВЫБРАТЬ КОЛИЧЕСТВО ПЕРЕСАДОК</label>
        <input type="checkbox" className={style.transfers} id="input-transfers" name="transfers" />
        <div className="choose-transfers" id="choose-transfers">
          <fieldset>
            <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
            <div>
              <input type="checkbox" id="AllTransfer" name="AllTransfer" checked />
              <label htmlFor="AllTransfer">Все</label>
            </div>
            <div>
              <input type="checkbox" id="0transfer" name="0transfer" />
              <label htmlFor="0transfer">Без пересадок</label>
            </div>
            <div>
              <input type="checkbox" id="1transfer" name="1transfer" />
              <label htmlFor="1transfer">1 пересадка</label>
            </div>
            <div>
              <input type="checkbox" id="2transfers" name="2transfers" />
              <label htmlFor="2transfers">2 пересадки</label>
            </div>
            <div>
              <input type="checkbox" id="3transfers" name="3transfers" />
              <label htmlFor="3transfers">3 пересадки</label>
            </div>
          </fieldset>
        </div>
      </div>

      <fieldset>
        <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
        <div>
          <input type="checkbox" id="AllTransfer" name="AllTransfer" checked />
          <label htmlFor="AllTransfer">Все</label>
        </div>
        <div>
          <input type="checkbox" id="0transfer" name="0transfer" />
          <label htmlFor="0transfer">Без пересадок</label>
        </div>
        <div>
          <input type="checkbox" id="1transfer" name="1transfer" />
          <label htmlFor="1transfer">1 пересадка</label>
        </div>
        <div>
          <input type="checkbox" id="2transfers" name="2transfers" />
          <label htmlFor="2transfers">2 пересадки</label>
        </div>
        <div>
          <input type="checkbox" id="3transfers" name="3transfers" />
          <label htmlFor="3transfers">3 пересадки</label>
        </div>
      </fieldset>
    </div>
  );
};

export default FilterTransplant;
