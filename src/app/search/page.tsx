// 'use client'


// // pages/WeatherSearch.tsx
// import React, { useState } from 'react';
// import { useWeatherData } from '../../hooks/useWeatherData';
// import CityCarousel from '../Components/CityCarousel';
// import ErrorModal from '../Components/ErrorModal';
// import { WeatherData } from '../../types/weather';

// const WeatherSearch: React.FC = () => {
//     const [searchTerm, setSearchTerm] = useState<string>('');
//     const [cities, setCities] = useState<WeatherData[]>([]);
//     const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
//     const { fetchWeatherData, loading, error } = useWeatherData();

//     const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!searchTerm.trim()) return;
    
//     const cityData = await fetchWeatherData(searchTerm);
    
//     if (cityData) {
//         // Check if city already exists to avoid duplicates
//         if (!cities.some(city => city.name.toLowerCase() === cityData.name.toLowerCase())) {
//         setCities([...cities, cityData]);
//         }
//         setSearchTerm('');
//     } else {
//         setShowErrorModal(true);
//     }
//     };

//     return (
//     <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold text-center mb-6">Weather Search</h1>
        
//         <form onSubmit={handleSearch} className="flex mb-6 justify-center">
//         <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Enter city name..."
//             className="border border-gray-300 rounded-l px-4 py-2 w-64"
//         />
//         <button 
//             type="submit" 
//             className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
//             disabled={loading}
//         >
//             {loading ? 'Searching...' : 'Search'}
//         </button>
//         </form>
        
//         {cities.length > 0 ? (
//         <CityCarousel cities={cities} />
//         ) : (
//         <p className="text-center text-gray-600">Search for a city to see weather information</p>
//         )}
        
//         <ErrorModal 
//         isOpen={showErrorModal} 
//         onClose={() => setShowErrorModal(false)} 
//         message="City not found. Please try again."
//         />
//     </div>
//     );
// };

// export default WeatherSearch;


'use client'
// src/pages/WeatherSearch.tsx
import React, { useState } from 'react';
import { useWeatherData } from '../../hooks/useWeatherData';
import CityCarousel from '../Components/CityCarousel';
import ErrorModal from '../Components/ErrorModal';
import { WeatherData } from '../../types/weather';

const WeatherSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cities, setCities] = useState<WeatherData[]>([]);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const { fetchWeatherData, loading, error } = useWeatherData();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    const cityData = await fetchWeatherData(searchTerm);
    
    if (cityData) {
      // Check if city already exists to avoid duplicates
      if (!cities.some(city => city.name.toLowerCase() === cityData.name.toLowerCase())) {
        setCities([...cities, cityData]);
      }
      setSearchTerm('');
    } else {
      setShowErrorModal(true);
    }
  };

  const handleDeleteCity = (index: number) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);
    setCities(updatedCities);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Weather Search</h1>
      
      <form onSubmit={handleSearch} className="flex mb-6 justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter city name..."
          className="border border-gray-300 rounded-l px-4 py-2 w-64"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {cities.length > 0 ? (
        <CityCarousel 
          cities={cities} 
          onDeleteCity={handleDeleteCity} 
        />
      ) : (
        <p className="text-center text-gray-600">Search for a city to see weather information</p>
      )}
      
      <ErrorModal 
        isOpen={showErrorModal} 
        onClose={() => setShowErrorModal(false)} 
        message="City not found. Please try again."
      />
    </div>
  );
};

export default WeatherSearch;