<script setup lang="ts">
import Navbar from '@/components/Navbar/Navbar.vue';
import Login from './components/Login/Login.vue';

function login(){

}

</script>

<template lang="pug">
Navbar(logoUrl="", :loggedUser="{}")
Login(@login="login", apiUrl="https://api.redcollege.net/api")
</template>
