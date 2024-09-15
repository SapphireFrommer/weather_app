import 'weather-icons/css/weather-icons.css';

interface WeatherCardProps {
    id: number;
    city_name: string;
    description: string | null;
    temp: number | null;
    feels_like: number | null;
    humidity: number | null;
  }
  
const WeatherCard: React.FC<WeatherCardProps> = ({ id, city_name, description, temp, feels_like, humidity}) => {
// Function to return the correct icon based on weather condition
  const getWeatherIcon = (condition: WeatherCardProps['temp']) => {
    if(!condition)
      return <i className="wi wi-na"></i>;
    if(condition <= 20)
      return <i className="wi wi-snow"></i>;
    if(condition >= 30)
      return <i className="wi wi-day-sunny"></i>;
    return <i className="wi wi-cloudy"></i>;
  };
  
  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5 className="card-title">{city_name}</h5>
        </div>
        <div className="text-right">
          {/* does the opposite, maybe because the direction of rtl wasn't applied correctly?*/}
          {getWeatherIcon(temp)}
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center mt-3">
        <p className="card-text">
          {description != null ? description : 'אין נתונים'}
        </p>
        <p className="card-text">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                {"טמפ' נמדדת"}
              </div>
              <div className="col">
                {"טמפ' מורגשת"}
              </div>
              <div className="col">
                {"לחות"}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {temp != null ? `${temp}°C` : 'אין נתונים'}
              </div>
              <div className="col">
                {feels_like != null ? `${feels_like}°C` : 'אין נתונים'}
              </div>
              <div className="col">
                {humidity != null ? `${humidity}%` : 'אין נתונים'}
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};
  
  export default WeatherCard;
  