import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetWeatherDetailsAction,
  getWeatherConditionsInCurrentCity,
} from "../Store/Actions/BaseActions";
import CityForm from "./CityForm";
import { useParams } from "react-router-dom";
import "./weather.scss";

const Weather = () => {
  const dispatch = useDispatch();

  const { city } = useParams();
  const [currentCity, setCurrentCity] = useState(city);
  const result = useSelector((state) => state.result);
  const selectedCity = useSelector((state) => state.city);

  useEffect(() => {
    if (city === "city") {
      dispatch(getWeatherConditionsInCurrentCity({ paylaod: "" }));
    } else {
      dispatch(GetWeatherDetailsAction({ city }));
    }
  }, [city]);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="weather_container">
      <div className="search_bar_container">
        <h2>The Weather App</h2>
        <div className="search_bar">
          <CityForm></CityForm>
        </div>
      </div>
      <div className="weather_container_details">
        <div className="first_weather_block">
          <div>
            <div>{selectedCity && selectedCity}</div>
            <div>
              {time.getHours()} :{" "}
              {time.getMinutes() < 10
                ? `0${time.getMinutes()}`
                : `${time.getMinutes()}`}
            </div>
            <div>
              {time.getUTCDay()}/{time.getMonth()}
            </div>
          </div>
          <div id="second_weather_block">
            {result && (
              <div>
                {parseInt(result.main.temp_min - 273.15)} °C ~{" "}
                {parseInt(result.main.temp_max - 273.15)} °C
              </div>
            )}
          </div>
        </div>
        <div className="third_weather_block">
          {result && <div> Wind Speed - {result.wind.speed} mph</div>}
        </div>
      </div>
    </div>
  );
};

export default Weather;
