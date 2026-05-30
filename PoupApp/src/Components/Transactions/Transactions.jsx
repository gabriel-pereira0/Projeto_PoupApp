import React from 'react';
import styles from './Transactions.module.css';
import { transactions } from '../../Utils/Transactions';
import { TransactionsItem } from '../TransactionsItem/TransactionsItem';
import { Button } from '../Button/Button';
import { IconCurrency } from '../Icons';

export function Transactions() {
  return (
    <>
      <ul className={styles.transactions}>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <TransactionsItem item={transaction} />
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <Button>
          <IconCurrency /> Adicionar Transação
        </Button>
      </div>
    </>
  );
}
