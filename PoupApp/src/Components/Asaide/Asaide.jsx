import React from 'react';
import styles from './Asaide.module.css';

import logo from '../../assets/logo_poupapp.svg';

export function Asaide() {
  return (
    <>
      <aside className={styles.aside}>
        <img src={logo} alt='Logo PoupApp' />
        <footer className={styles.footer}>
          Desenvolvido por Alura. Projeto fictício sem fins comerciais.
        </footer>
      </aside>
    </>
  );
}
