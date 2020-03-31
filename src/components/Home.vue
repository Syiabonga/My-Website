<template>
    <div class="container-fluid">
      <div class="section-information">
        <div class="row">
          <div class="col-md-2 hidden-xs"></div>
          <div class="col-md-8 text-center">
            <img src="../assets/0.jpg" class="center rounded-circle" alt="Cinque Terre">
            <h1>Leandro Landim</h1>
            <p>Welcome! I'm an eternal apprentice interested in technologies
              mainly focused in Web Development. In this website, I share my
              knowledge and bring the solution of some issues that I have been
              through during my coding routine.
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
        <div class="section-publication">
          <div class="row" v-if="!pubOpen">
            <div class="col-md pub-card">
              <div style="padding:40px;">
                <img src="../assets/css.png" alt="">
                <a href="#" @click="openPublication">
                  <span>How to avoid overlap using CSS?</span>
                </a>
              </div>
            </div>
            <div class="col-md pub-card">
              <div style="padding:40px;">
                <img src="../assets/logo.png" alt="">
                <a href="#" @click="openPublication">
                  <span>Get data from an API using Axios</span>
                </a>
              </div>
            </div>
          </div>
          <div class="row text-center" v-if="pubOpen" style="margin-top:20px;">
            <div class="col-md-3 hide-xs"></div>
            <div class="col-md-6">
              <hr>
              <h2 style="color:#495057;">How to avoid overlap using CSS?</h2>
              <a href="#" @click="closePublication" style="float:right;">
                <img src="../assets/back.png" alt="" style="width:15px;height:15px">
                voltar
              </a>
            </div>
            <div class="col-md-3 hide-xs"></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      pubOpen: false,
    };
  },
  methods: {
    openPublication() {
      this.pubOpen = true;
    },
    closePublication() {
      this.pubOpen = false;
    },
  },
};
</script>
<style scoped>
.section-information{
  padding: 50px;
}
.section-information img{
  height: 230px;
  width: 230px;
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
}
.section-publication{
  margin-top: 5%;
  text-align: center;
}
.section-publication span{
  font-size: 15px;
}
.section-publication a{
  text-decoration: none;
}
.section-publication img{
  width: 60px;
  height: 60px;
  align-self: center;
}
.section-publication .row{
  column-gap: 1em;
}
.section-publication .pub-card{
  background-color: white;
  height: 150px;
  width: 10px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #ABCBDF;
  font-size: 15px;
}
.section-publication .pub-card:hover{
  box-shadow:
    rgba(0, 0, 0, 0.4) 0 4px 8px 0;
    transition: box-shadow 500ms cubic-bezier(0.22, 0.84, 0.57, 1.5);
    background-color:
    white;
    border-radius: 5px;
}
.section-publication .pub-card a{
  text-decoration: none;
  color: #495057;
}
.section-publication .pub-card a:hover{
  cursor: pointer;
  color: #0096e6;
}
@media screen and (max-width: 896px) {
.section-publication .pub-card{
  margin-top: 15px;
  width: 100%;
}
.section-publication span{
  font-size: 10px;
}
}
</style>
