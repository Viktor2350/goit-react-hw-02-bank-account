import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, deposit, withdrawal }) => (
  <section className={styles.balance}>
    <span className={styles.balance__text}>&#8593; {`${deposit}$`}</span>
    <span className={styles.balance__text}>&#8595; {`${withdrawal}$`}</span>
    <span className={styles.balance__text}>Balance: {`${balance}`}</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  withdrawal: PropTypes.number.isRequired,
};

export default Balance;
