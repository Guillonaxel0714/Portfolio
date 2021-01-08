<template>
  <div class="about">
    <NavBar />
    <div class="section_about">
      <Titre titre="A Propos" />
      <p class="about_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe dolor, consectetur repudiandae amet laboriosam accusamus animi dolorum sapiente voluptates.</p>
      <Bouton class="bouton" buttontxt="Qui suis-je ?" />
    </div>
    <div class="arrow">
      <img src="../assets/left-arrow.svg" alt="icon fleche">
    </div>
  </div>
  <div class="all">
    <div class="block_about">
      <div class="about_text">
        <h2>Qui suis-je ?</h2>
        <div class="underline"></div>
        <h4>Je m'appelle Axel Guillon</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="about_image">
        <p></p>
      </div>
    </div>
    <div class="caroussel">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
  </div>

  <div class="all2">
    <div class="block_about2">
      <div class="about_text2">
        <h2>Développeur web</h2>
        <div class="underline2"></div>
        <h4>Techniquement parlant ?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="about_image2">
        <p></p>
      </div>
    </div>
    <div class="caroussel">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
  </div>
  
  
</template>


<script>
import NavBar from '../components/NavBar'
import Titre from '../components/Titre'
import Bouton from '../components/Bouton'

export default {
  name: 'About',
  components:{
    NavBar,
    Titre,
    Bouton
  }
}
</script>

<style scoped>

.about{
  height: 100vh;
  background-image: url('../assets/secondbg.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: 125%;
}

/*------------------------------------------------------ EN TETE ---------------------------------------------------------------- */

.section_about{
  text-align: center;
  width: 60%;
  margin: 0 auto;
  padding: 25px 0;
}

.about_description{
  color: white;
  font-size: 35px;
  padding: 3% 0;
}

.bouton{
  margin: 0 auto;
  border-radius: 25px;
}

.arrow{
  width: 50px;
  position: relative;
  top: 25%;
  margin: 0 auto;
}

.arrow img{
  height: 50px;
  transform: rotate(-90deg);
  cursor: pointer;
}

/* -----------------------------------------------------------CORPS-------------------------------------------------- */

.all{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
}

.block_about{
  width: 80%;
  display: flex;
  height: 500px;
  border-radius: 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.178);
}

.about_text{
  width: 55%;
  padding: 30px 30px;
}

.about_image{
  width: 45%;
  background-color: #35A890;
  border-radius: 0 25px 25px 0;
}

.caroussel{
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.circle{
  height: 30px;
  width: 30px;
  background-color: #0D7377;
  border-radius: 50px;
}

.about_text h2{
  font-size: 60px;
  color: #0D7377;
  margin-bottom: 10px;
}

.about_text h4{
  color: #0D7377;
  font-size: 30px;
  margin-bottom: 30px;
}

.about_text p{
  color: #D4D4D4;
  font-size: 20px;
}

.about_text .underline{
  width: 150px;
  height: 10px;
  border-top: 5px solid #0D7377;
  margin-bottom: 40px;
}

.all2{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
}

.block_about2{
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
  height: 500px;
  border-radius: 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.178);
}

.about_text2{
  width: 55%;
  padding: 30px 30px;
  text-align: right;
}

.about_text2 h2{
  font-size: 60px;
  color: #0D7377;
  margin-bottom: 10px;
}

.about_text2 h4{
  color: #0D7377;
  font-size: 30px;
  margin-bottom: 30px;
}

.about_text2 p{
  color: #D4D4D4;
  font-size: 20px;
}

.about_text2 .underline2{
  width: 150px;
  height: 10px;
  border-top: 5px solid #0D7377;
  float: right;
 
  margin-bottom: 40px;
}

.about_image2{
  width: 45%;
  background-color: #35A890;
  border-radius: 25px 0 0 25px;
}

</style>
