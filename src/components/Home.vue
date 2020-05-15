<template>
    <div class="container-fluid">
      <div class="section-information">
        <div class="row">
          <div class="col-md-2 hidden-xs"></div>
          <div class="col-md-8 text-center">
            <img src="../assets/avatar.png" class="avatar center rounded" alt="Cinque Terre">
            <h1>Hi!</h1>
            <p>My name is Leandro Landim. I'm a Junior Web Developer mainly focused
              in Javascript, CSS, HTML, and Ruby.
              Currently, I'm using Vue Js, Bootstrap, and Rails as frameworks
              to develop my projects.
              Music and Soccer are my slide-off.
            </p>

            <a href="https://github.com/Syiabonga">
              <img class="icon" src="../assets/github.png" alt="">
            </a>
            <a href="https://www.linkedin.com/in/leandro-landim-28349313a/">
              <img class="icon" src="../assets/linkedin.png" alt="" style="margin-left: 10px;">
            </a>
          </div>
          <div class="col-md-2 hidden-xs"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Home',
};
</script>
<style scoped>
.section-information{
  padding: 50px;
}
.section-information p{
  text-align: justify;
}
.section-information h1{
  text-align: center;
}
.section-information .icon{
  width: 30px;
  height: 30px;
  float: left;
}
.section-information p{
  text-align: center;
}
.section-information .avatar{
  height: 160px;
  width: 160px;
}
p{
  color: #495057;
  text-align: justify !important;
  line-height: 2em;
}
h1{
  margin-top: 0.7em;
}
@media screen and (max-width: 896px) {
.section-information h1{
  font-size: 35px;
}
.rem-pad{
  padding: 0px !important;
  margin-top: 40px;
}

.section-information .avatar{
  height: 100px;
  width: 100px;
}
.section-information{
  padding: 10%;
}
}
</style>
