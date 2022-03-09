console.log("the file is linked correctly");

// super sensitive. don't use too many commas
const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 49
    };
  },
  methods: {
    // changeTitle(input) {
    //   this.title = input
    // }
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
});

// only controls the part of the site with an id of app
app.mount("#app");
