export const state = () => ({
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
})

export const mutations = {
  removeArticle(state, articleNumber) {
    for (let i = 0; i < state.articleData.length; i++) {
      if (state.articleData[i].articleNumber === articleNumber) {
        state.articleData.splice(i, 1)
      }
    }
  },
}

export const actions = {
  remove({ commit }, payload) {
    commit('removeArticle', payload)
  },
}
