import styles from './NotFound.module.scss';
import { PiWarningCircleLight } from 'react-icons/pi';

const NotFound = () => {
  return (
    <div className={styles.error}>
      <PiWarningCircleLight className={styles.erroricon} />
      <br />
      <p>No weather data found</p>
    </div>
  );
};

export default NotFound;
