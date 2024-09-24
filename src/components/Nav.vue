<template >
  <div class="nav">
    <a href="" class="nav__logo">
      <img src="../assets/images/Header_logo.svg" alt="">
      vue weather
    </a>
    <input type="text" placeholder="Выбрать город" v-model="city" @keydown.enter="getWeather(city), (city = '')">
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      city: "",
    }
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  created() {
    this.getWeather("Tashkent")
  }
}
</script>
<style lang="">
  
</style>