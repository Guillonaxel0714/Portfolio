<template>
    <div class="home">
        <NavBar />
        <section class="home_section">
            <div class="home_gauche">
                <h2>Bonjour !</h2>
                <Titre titre="Je suis Axel Guillon" />
                <div class="underline"></div>
                <p class="home_txt">Etudiant à l'IIM | Paris la Défense </p>
                <p class="home_txt">Développeur web - front-end</p>
                <Bouton class="bouton" buttontxt="Découvrir mes projets" />
            </div>
            <div class="home_droite">
                <div class="content_img"></div>
            </div>
        </section>
    </div>
</template>

<script>
import Bouton from '../components/Bouton';
import NavBar from '../components/NavBar';
import Titre from '../components/Titre'

export default {
    name: 'Home',
    components:{
        Bouton,
        NavBar,
        Titre
    }
}
</script>

<style scoped>

.home{
  height: 100vh;
  background-image: url('../assets/bgformes.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 202%;
  background-position-x: 45%;
  background-position-y: 52%;
}

.home_section{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 8% 0;
}

.home_gauche{
  width: 60%;
  padding: 3% 5%;
}

.home_gauche h2{
  font-size: 40px;
  color: #0D7377;
  margin-bottom: 5px;
}

.home_gauche .home_txt{
  font-size: 30px;
  color: white;
  margin-bottom: 10px;
}

.bouton{
  border-radius: 10px;
}

.underline{
  width: 250px;
  height: 10px;
  border-top: 5px solid white;
  margin-bottom: 20px;
}

.home_droite{
  width: 40%;
}

.content_img{
  height: 425px;
  width: 425px;
  border-radius: 50%;
  background-image: url('../assets/presentation.jpg');
  background-size: cover;
  background-position-x: 35%;
  margin: 0 auto;
}


</style>