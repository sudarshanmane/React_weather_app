import { takeEvery } from "redux-saga/effects";
import { GetWeatherDetails, GetWeatherDetailsInCurrentCity } from "./RootSaga";
import { API_CONSTANTS } from "../../Globals/ApiConstatnts";

export function* RootSaga() {
  yield takeEvery(API_CONSTANTS.GET_WEATHER_DETAILS_LOAD, GetWeatherDetails);
  yield takeEvery(
    API_CONSTANTS.GET_WEATHER_CONDITIONS_IN_CURRENT_CITY_LOAD,
    GetWeatherDetailsInCurrentCity
  );
}
