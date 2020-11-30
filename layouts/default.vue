<template>
  <v-app dark>
    <v-app-bar clipped-left fixed app>
      <v-toolbar-title>Article Viewer</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  
}
</script>
