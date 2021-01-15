<template>
  <div>
    <Header />
    <center>
      <div class="col-md-8 col-md-offset-2 addPost">
        <h1>İçerik Ekle</h1>

        <form action="" method="POST">
          <div class="form-group">
            <label for="title">Başlık <span class="require">*</span></label>
            <input
              type="text"
              v-model="title"
              class="form-control"
              name="title"
            />
          </div>

          <div class="form-group">
            <label for="description">İçerik</label>
            <textarea
              rows="5"
              v-model="description"
              class="form-control"
              name="description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="description">Kategori</label>
            <select row="5" class="categorySelect" v-model="selectedCategory">
              <option
                v-for="category in categories"
                v-bind:key="category.id"
                v-bind:value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <p><span class="require">*</span> - doldurulması gereken alan</p>
          </div>

          <div class="form-group">
            <button type="submit" @click="newPost()" class="btn btn-primary">
              Ekle
            </button>
            <button @click="$router.push('/adminPage')" class="btn btn-default">
              İptal
            </button>
          </div>
        </form>
      </div>
    </center>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      description: "",
      categories: "",
      selectedCategory: 1,
    };
  },
  mounted() {
    axios
      .get("https://localhost:5001/api/post/getcategories")
      .then((response) => {
        this.categories = response.data;
      });
  },
  computed: {
    dateTime() {
      return Date().slice(3, 21);
    },
  },
  methods: {
    newPost() {
      axios.post("https://localhost:5001/api/post/addpost", {
        Title: this.title,
        Description: this.description,
        CategoryId: this.selectedCategory,
        CreatedDate: this.dateTime,
      });
      this.$router.push("/adminPage");
    },
  },
};
</script>

<style>
.addPost {
  margin-top: 200px;
}
</style>