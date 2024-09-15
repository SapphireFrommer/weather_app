import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherCard from './WeatherCard';

const cities = [
  'לונדון',
  'ניו יורק',
  'אלסקה',
  'אילת'
];

const WeatherGrid: React.FC = () => {
  const [descriptions, setDescriptions] = useState<Array<string | null>>(Array(cities.length).fill(null));
  const [temperatures, setTemperatures] = useState<Array<number | null>>(Array(cities.length).fill(null));
  const [feelsLike, setFeelsLike] = useState<Array<number | null>>(Array(cities.length).fill(null));
  const [humidity, setHumidity] = useState<Array<number | null>>(Array(cities.length).fill(null));

  useEffect(() => {
    const fetchTemperatures = async () => {
      const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';
      const requests = cities.map((city) =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=he`)
      );
      const responses = await Promise.all(requests);

      const descript = responses.map(response => response.data.weather[0].description);
      setDescriptions(descript);
      const temps = responses.map(response => response.data.main.temp);
      setTemperatures(temps);
      const feel = responses.map(response => response.data.main.feels_like);
      setFeelsLike(feel);
      const humidity = responses.map(response => response.data.main.humidity);
      setHumidity(humidity);
    };

    fetchTemperatures();
  }, []);
  return (
    <div className="container" dir="rtl">
      <div className="row">
        {cities.map((city, index) => (
          <div className="col-md-6" key={index}>
          <WeatherCard id={index} city_name={city} description={descriptions[index]} temp={temperatures[index]} feels_like={feelsLike[index]} humidity={humidity[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherGrid;
