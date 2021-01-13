<template>
    <div class="all">
        <div class="block_about">
            <div class="about_text">
                <h2>{{ information.title }}</h2>
                <div class="underline"></div>
                <h4>{{ information.subtitle }}</h4>
                <p>{{ information.description }}</p>
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
</template>

<script>

export default {
    name: 'about-list',
    props: ['information'],
  
}
</script>



<style scoped>

.all{
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
}

.block_about{
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    border-radius: 25px;
    box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.178);
}

.about_text{
  width: 605px;
  height: 550px;
  padding: 30px 30px;
  border-radius: 25px 0 0 25px;
}

.about_image{
  width: 495px;
  height: 550px;
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
  overflow: hidden;
}

.about_text .underline{
  width: 150px;
  height: 10px;
  border-top: 5px solid #0D7377;
  margin-bottom: 40px;
}

.all_reverse{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
}

.block_about_reverse{
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
  height: 500px;
  border-radius: 25px;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.178);
}

.about_image_reverse{
  width: 45%;
  background-color: #35A890;
  border-radius:  25px 0 0 25px ;
}

@media screen and (max-width: 1200px){
  .all{
    flex-flow: column;
  }
}


</style>