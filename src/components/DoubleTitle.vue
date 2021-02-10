<template>
    <div class="section_double_title">
        <h2>mes passions</h2>
        <p>mes passions</p>
    </div>
</template>

<script>
export default {
    name: 'DoubleTitle',
}
</script>

<style scoped>

.section_double_title{
    margin: 0 auto;
    height: 200px;
    text-align: center;
}

.section_double_title h2{
    text-transform: uppercase;
    font-size: 150px;
    font-weight: bold;
    color: #eeee;
    opacity: 40%;
    position: absolute;
    left: 15%;
}

.section_double_title p{
    text-transform: uppercase;
    font-size: 80px;
    position: relative;
    color: #0D7377;
    font-weight: bold;
    padding-top: 80px;
    z-index: 1;
}

</style>