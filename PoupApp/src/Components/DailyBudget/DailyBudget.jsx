import React from 'react';
import styles from './DailyBudget.module.css';
import { Cashformat } from '../../Utils/CashFormater';

export function DailyBudget({ value }) {
  return (
    <>
      <p className={styles.dailyBudget}>{Cashformat.format(value)}</p>
    </>
  );
}
