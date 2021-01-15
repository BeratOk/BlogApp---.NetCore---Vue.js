<template>
  <div>
    <Header />
    <div class="container-lg editSection">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>Makale <b>Listesi</b></h2>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  @click="$router.push('/newPost')"
                  class="btn btn-info add-new"
                >
                  <i class="fa fa-plus"></i> Yeni Ekle
                </button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Başlık</th>
                <th>Giriş Tarihi</th>
                <th>Kategori</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.id">
                <td>{{ post.title }}</td>
                <td>{{ post.createdDate.substring(0, 10) }}</td>
                <td>{{ post.categoryName }}</td>
                <td>
                  <a
                    class="edit isl"
                    title="Edit"
                    @click="editPost(post.postId)"
                    data-toggle="tooltip"
                    >Düzenle</a
                  >
                  <a
                    class="delete isl"
                    title="Delete"
                    @click="deletePost(post.postId)"
                    data-toggle="tooltip"
                    >Sil</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
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
    axios.get("https://localhost:5001/api/post/getposts").then((response) => {
      this.posts = response.data;
      axios
        .get("https://localhost:5001/api/post/getcategories")
        .then((response) => {
          this.categories = response.data;
        });
    });
  },

  created() {
    this.$store.commit("getPosts", this.posts);
  },

  data() {
    return {
      posts: [],
      categories: [],
    };
  },
  methods: {
    deletePost(postid) {
      var link = "https://localhost:5001/api/post/deletepost?postid=" + postid;
      axios.post(link);
      this.$router.go();
    },

    editPost(data) {
      this.$store.commit("editPostId", data);
      this.$router.push("/editPost");
    },
  },
};
</script>

<style>
.editSection {
  margin-top: 300px;
}
.isl {
  cursor: pointer;
}
</style>