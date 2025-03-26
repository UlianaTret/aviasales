import React from 'react';

import style from './trip.module.scss';

function num2str(n, textForms = ['пересадка', 'пересадки', 'пересодок']) {
  const number = Math.abs(n) % 100;
  const decimalNum = number % 10;
  if (number > 10 && number < 20) {
    return textForms[2];
  }
  if (decimalNum > 1 && decimalNum < 5) {
    return textForms[1];
  }
  if (decimalNum === 1) {
    return textForms[0];
  }
  return textForms[2];
}

const Trip = ({ trip }) => {
  const { origin, destination, date, duration, stops } = trip;
  const time = new Date(date);
  const timeDeparture = `${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`;
  const timeArrivalHours = `${(time.getHours() + Math.floor(duration / 60)) % 24}`;
  const timeArrivalMinutes = `${(time.getMinutes() + (duration % 60)) % 60}`;
  const timeArrival = `${timeArrivalHours < 10 ? `0${timeArrivalHours}` : timeArrivalHours}:${timeArrivalMinutes < 10 ? `0${timeArrivalMinutes}` : timeArrivalMinutes}`;

  return (
    <div className={style.trip}>
      <div>
        <p>
          {origin} – {destination}
        </p>
        <p>
          {timeDeparture} - {timeArrival}
        </p>
      </div>
      <div>
        <p>В ПУТИ</p>
        <p>
          {Math.floor(duration / 60)}ч {duration % 60}м
        </p>
      </div>
      <div>
        <p>
          {stops.length} {num2str(stops.length).toUpperCase()}
        </p>
        <p>{stops.length ? stops.join(', ') : '-'}</p>
      </div>
    </div>
  );
};

export default Trip;
