<template>
  <div>
    <v-row
      v-for="article in articles"
      :key="article.articleNumber"
      align="center"
      justify="center"
    >
      <v-col cols="12" md="8">
        <v-card class="mx-auto my-4">
          <v-img height="250" :src="article.image"></v-img>

          <v-card-title>{{ article.title }}</v-card-title>

          <v-card-text>
            <div>
              {{ article.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="primary" rounded outlined> Read More </v-btn>

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
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="secondary" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      text: `Article Deleted`,
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles.articleData
    },
  },
  methods: {
    deleteArticle(articleNumber) {
      console.log('deleting ' + articleNumber)
      this.$store.dispatch('articles/remove', articleNumber)
      this.snackbar = true;
    },
  },
}
</script>

<style lang="scss" scoped></style>
