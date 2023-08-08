import { message } from "antd";
import { http } from "./http.js";

export const Method = {
  async getData(url, payload) {
    try {
      const response = http.get(url);
      return response;
    } catch (error) {
      message.error(error);
    }
  },

  async getGeoLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
};
