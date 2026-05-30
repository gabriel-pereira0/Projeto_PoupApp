import React from 'react';
import styles from './AccountItem.module.css';

import { IconBank } from '../Icons';
import { Cashformat } from '../../Utils/CashFormater';

export function AccountItem({ item }) {
  return (
    <div className={styles.accountItem}>
      <div className={styles.bank}>
        <IconBank />
        <strong>{item.bank}</strong>
      </div>
      <div className={styles.balance}>
        <span>Valor</span>
        <p>{Cashformat.format(item.balance)}</p>
      </div>
    </div>
  );
}
