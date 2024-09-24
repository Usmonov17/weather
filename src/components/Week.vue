<template >
  <div class="week">
    <Day v-for="day in daily" :key="day.id" :day="day"/>
  </div>
</template>
<script>
import Day from './Day.vue';
import { mapGetters } from 'vuex'
export default {
  components: { Day },
  computed: {
    ...mapGetters(['daily'])
  },
}
</script>
