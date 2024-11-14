import { KeyboardEventHandler, useState } from 'react';
import { IoSearchCircleSharp } from 'react-icons/io5';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './CitySearch.module.scss';

interface CitySearchProps {
  onSearch: (searchCity: string) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusBlur = (focused: boolean) => {
    setIsFocused(focused);
  };

  const handleSearch = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  const handleSearchKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <Input
        type="text"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyUp={handleSearchKey}
        onFocus={() => handleFocusBlur(true)}
        onBlur={() => handleFocusBlur(false)}
        placeholder={isFocused ? '' : 'Enter your city...'}
      />
      <Button onClick={handleSearch} className={styles.searchButton} disabled={!searchCity}>
        <IoSearchCircleSharp />
      </Button>
    </div>
  );
};

export default CitySearch;
