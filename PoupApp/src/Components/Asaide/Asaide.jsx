import styles from './Asaide.module.css';

import logo from '../../assets/logo_poupapp.svg';

export function Asaide() {
  return (
    <>
      <aside className={styles.aside}>
        <img src={logo} alt='Logo PoupApp' />
        <footer className={styles.footer}>
          © {new Date().getFullYear()} PoupApp · Projeto de estudo, sem fins
          comerciais.
        </footer>
      </aside>
    </>
  );
}
