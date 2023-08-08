import { API_CONSTANTS } from "../../Globals/ApiConstatnts";

const initialState = {
  loading: false,
  loginData: [],
};

export function RootReducer(state = initialState, action) {
  switch (action.type) {
    case API_CONSTANTS.GET_WEATHER_DETAILS_LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    case API_CONSTANTS.GET_WEATHER_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        result: action.result,
        city: action.result.name,
        status: "ok",
      };
    }

    case API_CONSTANTS.GET_WEATHER_CONDITIONS_IN_CURRENT_CITY_LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    case API_CONSTANTS.GET_WEATHER_CONDITIONS_IN_CURRENT_CITY_SUCCESS: {
      return {
        ...state,
        loading: false,
        result: action,
        city: action.result.name,
        status: "ok",
      };
    }

    case API_CONSTANTS.GET_WEATHER_CONDITIONS_IN_CURRENT_CITY_FAILUER: {
      console.log("inside saga failuer");
      return {
        ...state,
        loading: false,
        city: action.result.name,
        status: "fail",
      };
    }

    default:
      return state;
  }
}
