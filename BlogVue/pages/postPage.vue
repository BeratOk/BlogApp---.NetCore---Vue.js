<template>
  <div>
    <Header />
    <div class="container posts">
      <div class="row postsRow">
        <div class="col">
          <p class="postTitle">{{ posttitle }}</p>
          <p class="postDescription">
            {{ postdescription }}
          </p>

          <p class="postDate">
            Eklenme Tarihi : {{ postdate }} Kategori:
            {{ postcategory }}
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  computed: {
    posttitle() {
      return this.$store.state.posttitle;
    },
    postdate() {
      return this.$store.state.postdate;
    },
    postcategory() {
      return this.$store.state.postcategory;
    },
    postdescription() {
      return this.$store.state.postdescription;
    },
  },
};
</script>

<style>
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