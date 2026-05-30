import React from 'react';
import styles from './ProgreeBar.module.css';

export function ProgreeBar({ percent }) {
  return (
    <>
      <div className={styles.warpper}>
        <div className={styles.filled} style={{ width: `${percent}%` }}>
          {percent}%
        </div>
      </div>
    </>
  );
}
