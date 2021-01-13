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

    <!-- <nav>
        <label class="logo">Axel Guillon</label>
        <ul class="nav_links">
            <li><a href="#">A propos</a></li>
            <li><a href="#">Projets</a></li>
            <li><a href="#">Experiences</a></li>
            <li><a href="#">Formations</a></li>
        </ul>
        <label id="icon" @click="openMobileNav">
            <img src="../assets/menu.svg" alt="icon menu">
        </label>
    </nav> -->

</template>

<script>
export default {
    name: 'NavBar',
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






/* nav{
    height: 80px;
    width: 100%;

}

label.logo{
    font-size: 35px;
    font-weight: bold;
    color: black;
    padding: 0 50px;
    line-height: 80px;
}

nav ul{
    float: right;
    margin-right: 40px;
}

nav li{
    display: inline-block;
    margin: 0 8px;
    line-height: 80px;
}

nav a{
    color: black;
    font-size: 30px;
    padding: 7px 30px;
}

nav #icon{
    float: right;
    cursor: pointer;
    height: 80px;
    padding: 25px 40px 0;
    display: none;
}

label img{
    width: 30px;
}

@media (max-width: 1131px){
    nav ul{
        margin-right: 20px;
    }
    nav a{
        font-size: 26px;
        padding: 7px 15px;
    } 
}

@media (max-width: 1024px){
    label.logo{
        font-size: 32px;
        padding-left: 60px;
    }
    nav ul{
        margin-right: 20px;
    }
    nav a{
        font-size: 26px;
        padding: 7px 15px;
    }
}

@media (max-width: 917px){
    label.logo{
        font-size: 28px;
        padding-left: 30px;
    }
    nav ul{
        margin-right: 10px;
    }
    nav a{
        font-size: 26px;
        padding: 7px 10px;
    }
}

@media (max-width: 816px){
    nav #icon{
        display: block;
    }
    nav ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: red;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
    }
    nav li{
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
    nav a{
        font-size: 32px;
    }
    nav ul.show{
        left: 0;
    }
} */

</style>