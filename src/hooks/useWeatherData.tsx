  // hooks/useWeatherData.tsx
  'use client'
  import { useState } from 'react';
  import { WeatherData } from '../types/weather';
  
  export const useWeatherData = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    const fetchWeatherData = async (cityName: string): Promise<WeatherData | null> => {
      setLoading(true);
      setError(null);
      
      try {
        // Simulate API call with a delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data for demo purposes
        const cities: Record<string, WeatherData> = {
          'new york': {
            name: 'New York',
            temperature: '15°C',
            description: 'Partly cloudy with a chance of rain'
          },
          'london': {
            name: 'London',
            temperature: '12°C',
            description: 'Overcast with light showers'
          },
          'tokyo': {
            name: 'Tokyo',
            temperature: '22°C',
            description: 'Clear skies and sunny'
          },
          'paris': {
            name: 'Paris',
            temperature: '18°C',
            description: 'Mild with occasional clouds'
          },
          'sydney': {
            name: 'Sydney',
            temperature: '25°C',
            description: 'Hot and humid'
          },
          'berlin': {
            name: 'Berlin',
            temperature: '14°C',
            description: 'Cloudy with light rain'
          },
          'madrid': {
            name: 'Madrid',
            temperature: '28°C',
            description: 'Hot and dry'
          },
          'rome': {
            name: 'Rome',
            temperature: '26°C',
            description: 'Sunny with light breeze'
          }
        };
        
        const normalizedCityName = cityName.toLowerCase();
        
        if (cities[normalizedCityName]) {
          setLoading(false);
          return cities[normalizedCityName];
        } else {
          setLoading(false);
          throw new Error('City not found');
        }
      } catch (error) {
        setLoading(false);
        setError((error as Error).message);
        return null;
      }
    };
  
    return { fetchWeatherData, loading, error };
  };
  