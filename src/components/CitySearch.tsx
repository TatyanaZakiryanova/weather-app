import { useState } from 'react';
import { HandleSearchFunction } from './types';

const CitySearch = ({ onSearch }: { onSearch: HandleSearchFunction }) => {
  const [searchCity, setSearchCity] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchCity);
  };

  return (
    <div>
      <input type="text" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CitySearch;
