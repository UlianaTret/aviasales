import React from 'react';

import style from './filterTickets.module.scss';

const FilterTickets = () => {
  console.log(style);
  const test = () => console.log('test');
  return (
    <div className={style.filter}>
      <button onClick={test}>САМЫЙ ДЕШЕВЫЙ</button>
      <button onClick={test}>САМЫЙ БЫСТРЫЙ</button>
      <button onClick={test}>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
};

// const FilterTickets = () => {
//   console.log(style);
//   const test = () => console.log('test');
//   return (
//     <div className={style.filter}>
//       <button onClick={test}>САМЫЙ ДЕШЕВЫЙ</button>
//       <button onClick={test}>САМЫЙ БЫСТРЫЙ</button>
//       <button onClick={test}>ОПТИМАЛЬНЫЙ</button>
//     </div>
//   );
// };

export default FilterTickets;
