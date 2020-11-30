<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h1>Welcome To Lookit!</h1>
      </v-col>
    </v-row>

    <article-card></article-card>
    <div class="my-12"></div>
    <create-article></create-article>
  </div>
</template>

<script>
import ArticleCard from '../components/home-page-components/ArticleCard.vue'
import CreateArticle from '../components/home-page-components/CreateArticle.vue'
export default {
  components: {
    ArticleCard,
    CreateArticle
  },
}
</script>
