<template>
  <div id="app">
    
        <router-link style="color: pink"  exact to="/cartelera"> Cartelera </router-link>
        <router-link style="color: purple"   exact to="/form"> Formulario </router-link>
        
    
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

