<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button type="button" @click="sune" style="padding: 10px; background: blueLight; border-radius: 10px; box-shadow: none">PUSH NOTIFICATION !</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    sune () {
      console.log(Notification.permission)
       if (Notification.permission === 'granted') {
        const notification = new Notification('This is granded message from API', {
          body: 'This is just plain text',
          image: 'https://media-exp1.licdn.com/dms/image/C560BAQHdVfLI4WpPIw/company-logo_200_200/0/1588864747982?e=2159024400&v=beta&t=ptcROrYhP3Gl735dOED7sMKbUA701y2kLlOgY7nZM6Y',
          icon: "https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
        });

        notification.onclick = () => {
          window.location.href = "https://udevs.io/"
        }
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            const notification = new Notification('You can try your best', {
              body: 'This is just text plain',
              icon: "https://www.thefamouspeople.com/profiles/images/inna-1.jpg"
            });

            notification.onclick = () => {
              window.location.href = "https://udevs.io/"
            }
          }
        })
      }
    }
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
