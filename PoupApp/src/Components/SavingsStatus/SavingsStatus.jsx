import React from 'react';
import styles from './SavingsStatus.module.css';
import { IconSavings } from '../icons';
import { ProgreeBar } from '../ProgreeBar/ProgreeBar';

export function SavingsStatus({ percent }) {
  return (
    <div className={styles.container}>
      <p>
        <IconSavings /> Economizar
      </p>
      <ProgreeBar percent={percent} />
    </div>
  );
}
