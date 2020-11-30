<template>
  <div>
    <v-system-bar color="accent"></v-system-bar>

    <v-app-bar color="secondary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>LookIt! Article Viewer</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer"  temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="secondary">
          <v-list-item to="/">
            <v-list-item-title>Articles</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title>About the Author</v-list-item-title>
          </v-list-item>

          <v-list-item to="/create">
            <v-list-item-title>Add An Article</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
