<script setup>

import Navbar from './components/navbar.vue'
import { RouterView } from 'vue-router';
// import homeview from './views/homeview.vue';
import Footer from './components/footer.vue';
</script>

<template>
<Navbar/>
<!-- <homeview/> -->
 <RouterView/>
 <Footer/>



</template>
