import React from "react";
import { API_CONSTANTS } from "../../Globals/ApiConstatnts";

export const GetWeatherDetailsAction = (payload) => {
  return {
    type: API_CONSTANTS.GET_WEATHER_DETAILS_LOAD,
    payload,
  };
};

export const getWeatherConditionsInCurrentCity = (payload) => {
  return {
    type: API_CONSTANTS.GET_WEATHER_CONDITIONS_IN_CURRENT_CITY_LOAD,
    payload,
  };
};
