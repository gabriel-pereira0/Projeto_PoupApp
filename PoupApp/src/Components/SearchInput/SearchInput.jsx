import styles from './SearchInput.module.css';
import { IconSearch } from '../icons';

export function SearchInput(props) {
  return (
    <>
      <div className={styles.container}>
        <IconSearch />
        <input
          className={styles.input}
          type='text'
          placeholder='Procure seu dinheiro...'
          {...props}
        />
      </div>
    </>
  );
}
