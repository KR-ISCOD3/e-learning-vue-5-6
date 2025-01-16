<template>
   <header>
        <Header/>
   </header>
   <main >
     <!-- <router-view></router-view> -->
     <RouterView />
   </main>
   <footer>
        <Footer/>
   </footer>
</template>

<script setup>
    import { RouterView } from 'vue-router';
    import Footer from './components/Footer.vue';
    import Header from './components/Header.vue'; 

</script>

