<template>
  <div>
    <center>
      <div class="container header">
        <div class="row">
          <div class="col">
            <div class="logo">
              <p>BLOG</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col menucol">
            <a @click="$router.push('/')">Anasayfa</a>
            <a @click="$router.push('/adminPage')">Yönetim</a>
            <a>Sayfa1</a>
            <a>Sayfa2</a>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo p {
  font-size: 50px;
  padding-left: 5%;
}
.menucol a {
  font-size: 25px;
  padding-left: 5%;
}
.header {
  position: absolute;
  width: 100%;
  z-index: 100;
  background-color: white;
  top: 0;
  padding-left: 15%;
}
.menucol a {
  cursor: pointer;
}
.menucol a:hover {
  font-size: 27px;
}
</style>