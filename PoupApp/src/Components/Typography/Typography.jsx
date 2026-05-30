import React from 'react';
import styles from './Typography.module.css';

const VARIANTS = {
  h1: 'h1',
  h2: 'h2',
  body: 'p',
};

export function Typography({ children, variant }) {
  const Component = VARIANTS[variant] || VARIANTS.body;
  const variantClass = styles[variant] || styles.body;

  return (
    <div className={styles.container}>
      <Component className={variantClass}>{children}</Component>
    </div>
  );
}
