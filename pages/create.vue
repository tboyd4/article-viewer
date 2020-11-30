<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h1>Add A New Article</h1>
      </v-col>
    </v-row>
    <div class="mx-14"></div>
    <create-article></create-article>
  </div>
</template>

<script>
import CreateArticle from '../components/create-page-components/CreateArticle.vue'
export default {
  components: {
    CreateArticle,
  },
}
</script>

<style lang="scss" scoped></style>
