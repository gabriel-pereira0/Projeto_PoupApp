import React from 'react';
import styles from './TransactionsItem.module.css';
import { Cashformat } from '../../Utils/CashFormater';

export function TransactionsItem({ item }) {
  const detailAddicional = item.value > 0 ? styles.income : styles.expense;

  return (
    <>
      <div className={styles.transactionItem}>
        <div className={`${styles.info} ${detailAddicional}`}>
          <p>{item.description}</p>
          <p className={styles.value}>{Cashformat.format(item.value)}</p>
        </div>
        <div className={styles.date}>
          {new Date(item.date).toLocaleDateString('pt-BR')}
        </div>
      </div>
    </>
  );
}
