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

  <about-list 
    v-for="(information, index) in apropos.informations" 
    :key="index"
    :information="information">
  </about-list>


</template>


<script>
import NavBar from '../components/NavBar'
import Titre from '../components/Titre'
import Bouton from '../components/Bouton'
import AboutList from '../components/AboutList'

import informationData from '../data/informations.json';


export default {
  name: 'About',
  components:{
    NavBar,
    Titre,
    Bouton,
    AboutList
  },
  data(){
    return{
      apropos: informationData
    }
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



</style>
