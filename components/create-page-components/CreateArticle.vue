<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="8">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="articleNumber"
          label="Article Number"
          required
        ></v-text-field>

        <v-text-field
          v-model="title"
          :counter="50"
          label="Article Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="description"
          label="Description"
          required
        ></v-text-field>

        <v-text-field v-model="image" label="Image Url" required></v-text-field>

        <v-btn
          :disabled="!valid"
          color="primary"
          rounded
          outlined
          class="mr-4"
          @click="submit"
        >
          Submit Article
        </v-btn>

        <v-btn color="error" rounded outlined class="mr-4" @click="reset">
          Clear
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    articleNumber: null,
    title: '',
    description: '',
    image: '',
  }),

  methods: {
    submit() {
      let newArticle = {
          articleNumber: this.articleNumber,
          title: this.title,
          description: this.description,
          image: this.image
      }
      this.$store.dispatch('articles/add', newArticle)
      this.reset();
    },
    reset() {
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style lang="scss" scoped></style>
