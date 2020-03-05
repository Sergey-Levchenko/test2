import axios from "axios";
import PATH from "./path";
import store from "../store";

export const http = axios.create({
  baseURL: "https://cinema-api-test.herokuapp.com",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
});

http.interceptors.request.use(config => {
  store.dispatch("ui/toggleIsLoading");
  // console.log('interceptors[REQ]: ', config);
  return config;
});

http.interceptors.response.use(
  config => {
    store.dispatch("ui/toggleIsLoading");
    // console.log('interceptors[RES]: ', config);
    return {
      status: config.status,
      message: config.statusText,
      payload: config.data
    };
  },
  error => {
    store.dispatch("ui/toggleIsLoading");
    store.dispatch(
      "ui/setNotification",
      {
        type: "alert",
        message: error.response.statusText
      },
      { root: true }
    );
  }
);

export const path = { ...PATH };
