<template>
  <div id="axios-get">
    <Header />
    <div class="container posts">
      <div class="row postsRow" v-for="post in posts" :key="post.id">
        <div class="col">
          <p class="postTitle">{{ post.title }}</p>
          <p class="postDescription">
            {{ post.description.substring(0, 700) }}
          </p>
          <button
            type="button"
            @click="
              addPostId(
                post.title,
                post.description,
                post.createdDate,
                post.categoryName
              );
              $router.push('/postPage');
            "
            class="btn btn-outline-secondary"
          >
            Daha Fazla Oku
          </button>
          <p class="postDate">
            Eklenme Tarihi : {{ post.createdDate.substring(0, 10) }} Kategori:
            {{ post.categoryName }}
          </p>
          {{ post.category }}
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  mounted() {
    axios
      .get("https://localhost:5001/api/post/getposts")
      .then((response) => (this.posts = response.data));
  },

  created() {
    this.$store.commit("getPosts", this.posts);
  },

  data() {
    return {
      posts: [],
    };
  },
  methods: {
    addPostId(posttitle, postdescription, postdate, postcategory) {
      this.$store.commit("getPostTitle", posttitle);
      this.$store.commit("getPostDesc", postdescription);
      this.$store.commit("getPostDate", postdate);
      this.$store.commit("getPostCateg", postcategory);
    },
  },
};
</script>
<style scoped>
.posts {
  padding-left: 10%;
  margin-top: 200px;
}
.postTitle {
  font-size: 30px;
}
.postDescription {
  font-size: 15px;
}
.postsRow {
  margin-top: 40px;
  margin-right: 10%;
  border-style: solid;
  border-color: grey;
  border-width: 1px;
}
</style>