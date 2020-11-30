<template>
  <v-app dark>
    <app-nav-bar></app-nav-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <foot-bar></foot-bar>
  </v-app>
</template>

<script>
import AppNavBar from '../components/global-components/AppNavBar.vue'
import FootBar from '../components/global-components/FooterBar.vue'
export default {
  components: {
    AppNavBar,
    FootBar,
  },
}
</script>
