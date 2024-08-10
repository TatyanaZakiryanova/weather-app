import { RiLoader4Fill } from 'react-icons/ri';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.loading}>
      <RiLoader4Fill className={styles.loadingicon} data-testid="icon-element" />
      <p>Please wait...</p>
    </div>
  );
};

export default Spinner;
