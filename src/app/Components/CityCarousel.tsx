'use client'

 // components/CityCarousel.tsx
 import React, { useRef } from 'react';
 import CityCard from './CityCard';
 import { WeatherData } from '../../types/weather';
 


 interface CityCarouselProps {
    cities: WeatherData[];
    onDeleteCity: (index: number) => void;
  }
  
  const CityCarousel: React.FC<CityCarouselProps> = ({ cities, onDeleteCity }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
  
    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
      }
    };
  
    return (
      <div className="relative w-full my-4">
        {cities.length > 3 && (
          <>
            <button 
              onClick={scrollLeft} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button 
              onClick={scrollRight} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Scroll right"
            >
              →
            </button>
          </>
        )}
        <div 
          ref={carouselRef} 
          className="flex overflow-x-auto py-2 px-4 gap-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cities.map((city, index) => (
            <div key={`${city.name}-${index}`} className="flex-shrink-0">
              <CityCard 
                city={city} 
                onDelete={() => onDeleteCity(index)} 
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CityCarousel;
  

//  interface CityCarouselProps {
//    cities: WeatherData[];
//  }
 
//  const CityCarousel: React.FC<CityCarouselProps> = ({ cities }) => {
//    const carouselRef = useRef<HTMLDivElement>(null);
 
//    const scrollLeft = () => {
//      if (carouselRef.current) {
//        carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' });
//      }
//    };
 
//    const scrollRight = () => {
//      if (carouselRef.current) {
//        carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
//      }
//    };
 
//    return (
//      <div className="relative w-full my-4">
//        {cities.length > 3 && (
//          <>
//            <button 
//              onClick={scrollLeft} 
//              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
//              aria-label="Scroll left"
//            >
//              ←
//            </button>
//            <button 
//              onClick={scrollRight} 
//              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
//              aria-label="Scroll right"
//            >
//              →
//            </button>
//          </>
//        )}
//        <div 
//          ref={carouselRef} 
//          className="flex overflow-x-auto py-2 px-4 gap-4 scroll-smooth"
//          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//        >
//          {cities.map((city, index) => (
//            <div key={`${city.name}-${index}`} className="flex-shrink-0">
//              <CityCard city={city} />
//            </div>
//          ))}
//        </div>
//      </div>
//    );
//  };
 
//  export default CityCarousel;