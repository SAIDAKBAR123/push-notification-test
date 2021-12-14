<template>
  <div id="app">
    <img alt="Vue logo" src="https://www.trendrr.net/wp-content/uploads/2017/06/Emma-Watson-Top-Most-Famous-Beautiful-Hollywood-Actresses-2018.jpg">
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
      // alert('sdfsfsdcds')
      console.log(Notification.permission)
       if (Notification.permission === 'granted') {
        const notification = new Notification('This is granded message from API', {
          body: 'This is just plain text',
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
      // if (Notification.permission == 'granted') {
      //     let notification = new Notification('This is just test', {
      //       image: 'https://lh3.googleusercontent.com/proxy/OlPbCnEN1F_IB4-NdJVEyGnu6HtKi4G4MOsYq0-K0fqgcMR5xw7sOqJzxUWW596KDZxTyTRL-JJyUS5O-z7OPgnivyUGHrIwCEc9uWjQpITMR74',
      //       data: 'this is also go',
      //       title: 'Gogogog'
      //     })
      //     notification.onclick = function(event) {
      //       event.preventDefault(); // prevent the browser from focusing the Notification's tab
      //       window.open('http://www.mozilla.org', '_blank');
      //     }
      // }
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
