<template>
  <div id="app">
    <Header/>
    <Menu/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    Header, 
    Menu,
    Footer
  }
}
</script>

<style>
  @import './styles/global.css';
</style>
