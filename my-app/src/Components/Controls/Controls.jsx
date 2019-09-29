import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ value, handleChange, handleClick }) => {
  return (
    <section className={styles.controls}>
      <input
        className={styles.controls__input}
        type="number"
        value={value}
        onChange={handleChange}
      />
      <button
        className={styles.controls__button}
        type="button"
        name="deposit"
        onClick={handleClick}
      >
        Deposit
      </button>
      <button
        className={styles.controls__button}
        type="button"
        name="withdrawal"
        onClick={handleClick}
      >
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Controls;
