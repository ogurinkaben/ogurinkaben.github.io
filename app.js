    const theme = document.getElementById("body");
    const toggleIcon = document.getElementById("toggle");

    function toggleTheme() {
      if (theme.classList.contains("dark")) {
        theme.classList.add("light");
        theme.classList.remove("dark");
        toggleIcon.style.opacity = "0.5";
        localStorage.setItem('theme', theme.className);
      } else {
        theme.classList.remove("light");
        theme.classList.add("dark");
        toggleIcon.style.opacity = "1";
        localStorage.setItem('theme', theme.className);
      }
      console.log(theme.className);
    }

    function loadTheme() {
      if (localStorage.getItem("theme") === null) {
        localStorage.setItem('theme', "dark");
      } else {
        let currentTheme = localStorage.theme;
        theme.className = currentTheme;
      }
    }
    window.onload = loadTheme;

    function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
    //<============ Vue.js <============
    const Code = {
      template: '#code'
    }
    const Design = {
      template: '#design'
    }
    const NotFound = {
      template: '#page-not-found'
    }
    const routes = [{
        path: '/',
        component: Code
      },
      {
        path: '/design',
        component: Design
      },
      {
        path: '*',
        component: NotFound
      },
    ]
    const router = new VueRouter({
      routes
    });
    const app = new Vue({
      router,
      el: '#app',
    }).$mount('#app');