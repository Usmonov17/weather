<template >
  <div class="container">
    <Nav />
    <Current />
    <Week />
  </div>
</template>
<script>
import Current from './components/Current.vue';
import Nav from './components/Nav.vue';
import Week from './components/Week.vue';
export default {
  components: { Nav, Current },
}

</script>
