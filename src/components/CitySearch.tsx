import { KeyboardEventHandler, useState } from 'react';
import { HandleSearchFunction } from './types';

const CitySearch = ({ onSearch }: { onSearch: HandleSearchFunction }) => {
  const [searchCity, setSearchCity] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchCity);
  };

  const handleSearchKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your city..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyUp={handleSearchKey}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CitySearch;
