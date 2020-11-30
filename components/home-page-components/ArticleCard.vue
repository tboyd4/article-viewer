<template>
  <div>
    <v-row
      v-for="article in articleData"
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
              class="my-2 mx-1"
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
  data() {
    return {
      articleData: [
        {
          articleNumber: 1,
          title: 'Drones, The Future of Food Delivery',
          description:
            'Sometime in the future, a drone flown by a man in a building in Idaho will be delivering your DoorDash. That time is coming soon. ',
          image: '/image1.jpg',
        },
        {
          articleNumber: 2,
          title: 'Programming Is Cool',
          description:
            'Programming is great because you can do fun stuff and get paid pretty darn good for it. Read this article to find out more',
          image: '/image2.jpg',
        },
        {
          articleNumber: 3,
          title: 'Are Co-Working Spaces Actually Productive?',
          description:
            'Yes. They are super awesome and cool, especially if they are in the middle of downtown KC near a Messenger Coffee.',
          image: '/image3.jpg',
        },
        {
          articleNumber: 4,
          title: 'Should you get the new M1 MacBook Pro?',
          description:
            "Probably should. It is super fast and you can build and export code files so much faster. It's pretty cool.",
          image: '/image4.jpg',
        },
        {
          articleNumber: 5,
          title: 'What is the future of Tech?',
          description:
            'Fast growing tech consultancy company Uhray is the future of tech. Enough said.',
          image: '/image5.jpg',
        },
      ],
    }
  },
  methods: {
    deleteArticle(articleNumber) {
      console.log('deleting ' + articleNumber)
      for (let i = 0; i < this.articleData.length; i++) {
        if (this.articleData[i].articleNumber === articleNumber) {
          console.log('deleted ' + this.articleData[i].title)
          this.articleData.splice(i, 1)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
