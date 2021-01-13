<template>
  <div class="projets">
    <NavBar />
  </div>
  <section class="tout">
    <section class="jsp">
      <div class="blue"></div>
      <div class="red"></div>
    </section>
    <section>
      <div class="bite"></div>
    </section>
  </section>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'Projets',
  components:{
    NavBar
  }
}
</script>

<style scoped>

.tout{
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
}

.jsp{
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.178);
border-radius: 25px;
background-color: black;
}

.blue{
  width: 605px;
  height: 550px;
  background-color: blue;
  border-radius: 25px 0 0 25px;
}

.red{
  width: 495px;
  height: 550px;
  background-color: red;
  border-radius: 0 25px 25px 0;
}

.bite{
  width: 60px;
  height: 550px;
  background-color: pink
}

</style>