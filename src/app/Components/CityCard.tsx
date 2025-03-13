  // components/CityCard.tsx
  import React from 'react';
  import { WeatherData } from '../../types/weather';
  
//   interface CityCardProps {
//     city: WeatherData;
//   }
  
//   const CityCard: React.FC<CityCardProps> = ({ city }) => {
//     return (
//       <div className="bg-white p-4 rounded-lg shadow-md min-w-64 m-2 flex flex-col">
//         <h2 className="text-xl font-bold text-gray-800">{city.name}</h2>
//         <div className="mt-2">
//           <p className="text-3xl font-bold text-blue-600">{city.temperature}</p>
//           <p className="text-gray-600 mt-1">{city.description}</p>
//         </div>
//       </div>
//     );
//   };
  
//   export default CityCard;

interface CityCardProps {
    city: WeatherData;
    onDelete: () => void;
  }
  
  const CityCard: React.FC<CityCardProps> = ({ city, onDelete }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md min-w-64 m-2 flex flex-col relative">
        <button 
          onClick={onDelete}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          aria-label="Delete city"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold text-gray-800">{city.name}</h2>
        <div className="mt-2">
          <p className="text-3xl font-bold text-blue-600">{city.temperature}</p>
          <p className="text-gray-600 mt-1">{city.description}</p>
        </div>
      </div>
    );
  };
  
  export default CityCard;