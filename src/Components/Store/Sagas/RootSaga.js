import { message } from "antd";
import { Method } from "../Axios/BaseAxios";
import { API_CONSTANTS } from "../../Globals/ApiConstatnts";
import { put } from "redux-saga/effects";

export function* GetWeatherDetails(action) {
  try {
    const url = `/data/2.5/weather?q=${action.payload.city}&appid=5f23020f60def816fd16544d01873d58`;
    let result = yield Method.getData(url, action);

    if (result.status === 200) {
      yield put({
        type: API_CONSTANTS.GET_WEATHER_DETAILS_SUCCESS,
        result: result.data,
      });
    } else {
      message.error("something went wrong.");
    }
  } catch (error) {
    message.config({
      duration: 3,
      maxCount: 1,
    });

    message.error(
      "Oops! We couldn't find any information for the city you entered. Please check the spelling and try again."
    );
  }
}

export function* GetWeatherDetailsInCurrentCity(action) {
  try {
    let latLongtitude = yield Method.getGeoLocation();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLongtitude.latitude}&lon=${latLongtitude.longitude}&appid=5f23020f60def816fd16544d01873d58`;
    let result = yield Method.getData(url, action);

    if (result.status === 200) {
      yield put({
        type: API_CONSTANTS.GET_WEATHER_DETAILS_SUCCESS,
        city: result.data.name,
        result: result.data,
      });
    }
  } catch (error) {
    message.error("error");
  }
}
