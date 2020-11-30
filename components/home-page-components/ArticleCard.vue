<template>
  <div>
    <v-row
      v-for="article in articles"
      :key="article.articleNumber"
      align="center"
      justify="center"
    >
      <v-col cols="12" md="8">
        <v-card class="mx-auto my-12">
          <v-img height="250" :src="article.image"></v-img>

          <v-card-title>{{ article.title }}</v-card-title>

          <v-card-text>
            <div>
              {{ article.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="primary" rounded outlined>
              Read More
            </v-btn>

            <v-btn
              class="my-2 mx-3"
              color="warning"
              outlined
              rounded
              @click="deleteArticle(article.articleNumber)"
            >
              Delete Article
            </v-btn>
          </v-card-actions>
          <v-spacer></v-spacer>
          <p>{{ articleNumber }}</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
      articles() {
          return this.$store.state.articles.articleData
      }
  },
  methods: {
    deleteArticle(articleNumber) {
      console.log('deleting ' + articleNumber)
      this.$store.dispatch('articles/remove', articleNumber)
    },
  },
}
</script>

<style lang="scss" scoped></style>
