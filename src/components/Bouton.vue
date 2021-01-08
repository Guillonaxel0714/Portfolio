<template>
  <div class="button">
      <p class="txt_bouton">{{ buttontxt }}</p>
  </div>
</template>

<script>
export default {
    name: 'Bouton',
    props: ['buttontxt']

}
</script>

<style scoped>

.button{
    background-color: white;
    width: 200px;
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    color: #0D7377;
}

</style>