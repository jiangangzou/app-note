<template>
  <div id="app">
    <notes></notes>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
  import Notes from './components/Notes'
  // import 'semantic-ui-css/semantic.min.css'  

  export default {
    name: 'app',
    components: { 
      Notes
    }
  }
</script>