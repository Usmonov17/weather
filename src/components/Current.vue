<template>
  <div class="current" v-if="weather">
    <div class="current__left">
      <h2 class="current__left-temp">{{ Math.round(current.temp) }}°</h2>
      <p class="current__left-day">Сегодня</p>
      <p class="current__left-time">Время: {{ getHour }}</p>
      <p class="current__left-city">Город: {{ weather.name }}</p>
      <div class="current__left-img">
        <img v-if="description == 'clear sky'" src="../assets/images/animated/day.svg" alt="">
        <img v-else-if="descr == 'few clouds'" src="../assets/images/animated/cloudy-day-2.svg" alt="">
        <img v-else-if="descr == 'light rain'" src="../assets/images/animated/rainy-3.svg" alt="">
        <img v-else-if="descr == 'moderate rain'" src="../assets/images/animated/rainy-4.svg" alt="">
        <img v-else-if="descr == 'heavy intensity rain'" src="../assets/images/animated/rainy-5.svg" alt="">
        <img v-else-if="descr == 'light snow'" src="../assets/images/animated/snowy-2.svg" alt="">
        <img v-else-if="descr == 'snow'" src="../assets/images/animated/snowy-5.svg" alt="">
        <img v-else-if="descr == 'thunderstorm'" src="../assets/images/animated/thunder.svg" alt="">
        <img v-else src="../assets/images/animated/cloudy.svg" alt="">
      </div>
    </div>
    <div class="current__right">
      <div class="current__info">
        <div class="current__info-img">
          <img src="../assets/images/temp.svg" alt="">
        </div>
        <p class="current__info-temp">Температура</p>
        <p class="current__info-text">{{ Math.round(current.temp) }}° - ощущается как {{ Math.round(current.feels_like)
        }}°</p>
      </div>
      <div class="current__info">
        <div class="current__info-img">
          <img src="../assets/images/davleniya.svg" alt="">
        </div>
        <p class="current__info-temp">Давление </p>
        <p class="current__info-text">{{ current.pressure }} мм ртутного столба - нормальное</p>
      </div>
      <div class="current__info">
        <div class="current__info-img">
          <img src="../assets/images/yomgir.svg" alt="">
        </div>
        <p class="current__info-temp">Осадки</p>
        <p class="current__info-text">{{ current.weather[0].description }}</p>
      </div>
      <div class="current__info">
        <div class="current__info-img">
          <img src="../assets/images/wind.svg" alt="">
        </div>
        <p class="current__info-temp">Ветер</p>
        <p class="current__info-text">{{ current.wind_speed }} м/с юго-запад - легкий ветер</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters(['current']),
    ...mapState(['weather']),
    getHour() {
      return new Date().toLocaleString("ru-RU", {
        timeZone: this.weather.timezone,
        timeStyle: "short",
      })
    },
    descr() {
      return this.current.weather[0].description
    }
  }
}
</script>