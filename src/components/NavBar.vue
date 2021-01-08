<template>
    <header>
        <router-link class="router_link" to="/"><p>Axel Guillon</p></router-link>
        <nav>
            <ul class="nav_links">
                <router-link class="router_link" to="/About"><li><a href="">A propos</a></li></router-link>
                <router-link class="router_link" to="/Projets"><li><a href="">Projets</a></li></router-link>
                <router-link class="router_link" to="/Experiences"><li><a href="">Experiences</a></li></router-link>
                <router-link class="router_link" to="/Formations"><li><a href="">Formations</a></li></router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
}
</script>

<style scoped>

p{
    font-size: 32px;
    font-weight: bold;
    color: black;
}

li a{
    font-size: 30px;
    font-weight: 500;
    color: black;
    text-decoration: none;
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 2%;
    width: 100%;
}

.nav_links{
    list-style: none;
}

.nav_links li{
    display: inline-block;
    padding: 0 40px;
}

.router_link{
    text-decoration: none;
}

</style>