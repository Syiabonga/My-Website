<template>
    <div class="container-fluid">
      <div class="section-information">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/0.png" class="rounded-circle" alt="Cinque Terre">
            <h1>Leandro Landim</h1>
            <p>Hello! I'm an eternal apprentice interested in technologies
              mainly focused in Web Development. In this website, I share some
              knowledge and bring the solution of some issues that I have been
              through during my coding routine.
            </p>
            <a href="https://github.com/Syiabonga">
              <img class="icon" src="../assets/github.png" alt="">
            </a>
            <img class="icon" src="../assets/linkedin.png" alt="" style="margin-left: 10px;">
          </div>
        </div>
        <div class="section-publication">
          <div class="row">
            <div class="col-md-2 hide-xs"></div>
            <div class="col-md-4 pub-card">
              <div style="padding:25px;">
                <img src="../assets/css.png" alt="">
                <a href="#">
                  <span>How to avoid overlap using CSS?</span>
                </a>
              </div>
            </div>
            <div class="col-md-4 pub-card">
              <div style="padding:25px;">
                <img src="../assets/logo.png" alt="">
                <a href="#">
                  <span>How to avoid overlap using CSS?</span>
                </a>
              </div>
            </div>
            <div class="col-md-2 hide-xs"></div>
          </div>
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
.section-information .icon{
  width: 30px;
  height: 30px;
}
.section-publication{
  margin-top: 5%;
}
.section-publication img{
  width: 90px;
  height: 90px;
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
@media screen and (max-width: 736px) {
.section-publication{
  font-size: 11px;
}
.section-publication .pub-card{
  margin-top: 20px;
  width: 100%;
}
}
</style>
