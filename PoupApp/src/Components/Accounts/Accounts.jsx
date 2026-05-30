import React from 'react';
import styles from './Accounts.module.css';
import { AccountItem } from '../AccountItem/AccountItem';
import { accounts } from '../../Utils/Accounts';
import { IconWallet } from '../Icons';
import { Button } from '../Button/Button';

export function Accounts() {
  return (
    <>
      <ul className={styles.accounts}>
        {accounts.map((account, index) => (
          <li key={index}>
            <AccountItem item={account} />
          </li>
        ))}
      </ul>
      <div className={styles.buttonAccount}>
        <Button>
          <IconWallet /> Adicionar Conta
        </Button>
      </div>
    </>
  );
}
