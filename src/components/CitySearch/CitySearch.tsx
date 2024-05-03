import { KeyboardEventHandler, useState } from 'react';
import { HandleSearchFunction } from '../WeatherData/types';
import styles from './CitySearch.module.scss';
import { IoSearchCircleSharp } from 'react-icons/io5';

const CitySearch = ({ onSearch }: { onSearch: HandleSearchFunction }) => {
  const [searchCity, setSearchCity] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearch = () => {
    onSearch(searchCity);
  };

  const handleSearchKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyUp={handleSearchKey}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={isFocused ? '' : 'Enter your city...'}
      />
      <button onClick={handleSearch}>
        <IoSearchCircleSharp className={styles.icon} />
      </button>
    </div>
  );
};

export default CitySearch;
