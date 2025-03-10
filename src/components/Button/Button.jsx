import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {
  const { text = 'тестовая кнопка' } = props;
  // console.log(styles);
  return (
    <button className={styles.button} onClick={() => console.log('еще 5 билетов')}>
      {text}
    </button>
  );

  // return <button style={{
  //   backgroundColor: "maroon",
  // }}>{text}</button>;
  // return <p style={styles.active}>{text}</p>;
};

export default Button;
