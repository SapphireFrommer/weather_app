import React from 'react';
import WeatherGrid from './components/WeatherGrid';

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-center">תחזית מסביב לעולם</h1>
      <WeatherGrid />
    </div>
  );
};

export default App;
