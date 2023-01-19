import React ,{useState, useEffect}from 'react';
import { fetchWeather } from './api/fetchWeather';

import './App.css';
const APIKey ='6e52daf8438d59fb4873293fd664ddc4';
const App = () => {
    const [query, setQuery]=useState('');
const [weather,setWeather]=useState('');
    const search =async(e)=>{
        if(e.key==='Enter')
        {
            const data= await fetchWeather(query);
            setWeather(data);
            setQuery('');

        }
    }
  
    return (
        <div className="My_Busket">
        <input 
        type="text"
        placeholder="Search town ..."
        className="Find"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onKeyPress={search}

        />
        {weather.main && (
            <div className="Town">
                <h2 className="town-name">
                    <span>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                </h2>
                <div className="town-temp">
                    {
                        Math.round((weather.main.temp)-273.15)}
                    <sup>&deg;C</sup>
                </div>
                <div className="information">
                    <img className="town-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>
        )}        
        </div>
    )
}

export default App
