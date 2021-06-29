<template>
  <div id="app">
    
        <router-link exact to="/cartelera"> Cartelera </router-link>
        <router-link exact to="/form"> Formulario </router-link>
        
    
    <router-view/>
  
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
