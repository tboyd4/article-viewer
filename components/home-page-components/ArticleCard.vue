<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card class="mx-auto my-12">
          <v-img height="250" :src="image"></v-img>

          <v-card-title>{{ title }}</v-card-title>

          <v-card-text>
            <div>
              {{ desc }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              class="my-2 mx-1"
              color="info"
              outlined
              rounded
              @click="readPost"
            >
              Read More
            </v-btn>
            <v-btn
              class="my-2 mx-1"
              color="warning"
              outlined
              rounded
              @click="deletePost"
            >
              Delete Article
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {},
  props: ['title', 'desc', 'image'],
  methods: {
      readPost() {
          console.log('reading post')
      },
      deletePost() {
          console.log('deleting post')
      }
  },
}
</script>

<style lang="scss" scoped></style>
