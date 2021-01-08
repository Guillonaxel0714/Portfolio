<template>
    <h1>{{ titre }}</h1>
</template>

<script>
export default {
    name: 'Titre',
    props:['titre']
}
</script>

<style scoped>

h1{
    font-size: 80px;
    font-weight: bold;
    color: white;
}

</style>