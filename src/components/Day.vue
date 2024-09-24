<template >
  <div class="day">
    <h2 class="day__title">{{ getWeek }}</h2>
    <p class="day__date">{{ getDate }}-{{ getMonth }}</p>
    <img v-if="description == 'clear sky'" src="../assets/images/animated/day.svg" alt="">
    <img v-else-if="descr == 'few clouds'" src="../assets/images/animated/cloudy-day-2.svg" alt="">
    <img v-else-if="descr == 'light rain'" src="../assets/images/animated/rainy-3.svg" alt="">
    <img v-else-if="descr == 'moderate rain'" src="../assets/images/animated/rainy-4.svg" alt="">
    <img v-else-if="descr == 'heavy intensity rain'" src="../assets/images/animated/rainy-5.svg" alt="">
    <img v-else-if="descr == 'light snow'" src="../assets/images/animated/snowy-2.svg" alt="">
    <img v-else-if="descr == 'snow'" src="../assets/images/animated/snowy-5.svg" alt="">
    <img v-else-if="descr == 'thunderstorm'" src="../assets/images/animated/thunder.svg" alt="">
    <img v-else src="../assets/images/animated/cloudy.svg" alt="">
    <p class="day__max">{{ Math.round(day.temp.max) }}°</p>
    <p class="day__min">{{ Math.round(day.temp.min) }}°</p>
    <div class="day__descr">{{ day.weather[0].main }}</div>
  </div>
</template>
<script>
export default {
  props: {
    day: Object
  },
  computed: {
    descr() {
      return this.day.weather[0].description
    },
    getWeek() {
      const date = new Date(this.day.dt * 1000)
      return date.toLocaleString('ru-RU', {
        weekday: 'long'
      })
    },
    getDate() {
      const date = new Date(this.day.dt * 1000)
      return date.toLocaleString('ru-RU', {
        day: '2-digit'
      })
    },
    getMonth() {
      const date = new Date(this.day.dt * 1000)
      return date.toLocaleString('ru-RU', {
        month: 'long'
      })
    }
  },
}
</script>