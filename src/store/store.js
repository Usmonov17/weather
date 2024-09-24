import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    apiKey: "39a933cc01e9445f07ec67e6e3924d63",
    weather: null,
  },
  mutations: {
    setWeather(state, payload) {
      state.weather = payload;
    },
  },
  actions: {
    async getWeather({ state, commit }, city) {
      try {
        let res = await axios(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`
        );
        let data = await res.data[0];
        const { lat, lon, name } = data;
        let api = await axios.get(
          `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric`
        );
        let apiData = {
          ...api.data,
          name,
        };
        commit("setWeather", apiData);
      } catch (error) {}
    },
  },
  getters: {
    current: (state) => state.weather.current,
    daily: (state) => {
      return state.weather?.daily.filter((day, i, arr) => i < arr.length - 1);
    },
  },
});
export default store;
