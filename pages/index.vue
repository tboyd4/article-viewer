<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h1>Welcome To Lookit!</h1>
      </v-col>
    </v-row>

    <div v-for="article in articleData" :key="article.title">
      <article-card :title="article.title" :desc="article.description" :image="article.image"></article-card>
    </div>
  </div>
</template>

<script>
import ArticleCard from '../components/home-page-components/ArticleCard.vue'
export default {
  data () {
    return {
      articleData: [
        {
          title: "Programming Is Cool",
          description: "Programming is great because you can do fun stuff and get paid pretty darn good for it. Read this article to find out more",
          image: "/image1.jpg"
        },
        {
          title: "Programming Is Cool",
          description: "Programming is great because you can do fun stuff and get paid pretty darn good for it. Read this article to find out more",
          image: "/image2.jpg"
        },
        {
          title: "Programming Is Cool",
          description: "Programming is great because you can do fun stuff and get paid pretty darn good for it. Read this article to find out more",
          image: "/image3.jpg"
        },
        {
          title: "Programming Is Cool",
          description: "Programming is great because you can do fun stuff and get paid pretty darn good for it. Read this article to find out more",
          image: "/image4.jpg"
        },
        {
          title: "Programming Is Cool",
          description: "Programming is great because you can do fun stuff and get paid pretty darn good for it. Read this article to find out more",
          image: "/image5.jpg"
        }
      ]
    }
  },
  components: {
    ArticleCard,
  },
}
</script>
