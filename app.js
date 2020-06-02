const theme = document.getElementById("body");
const toggleIcon = document.getElementById("toggle");

function toggleTheme() {
  if (theme.classList.contains("dark")) {
    theme.classList.add("light");
    theme.classList.remove("dark");
    toggleIcon.style.opacity = "0.5";
    localStorage.setItem("theme", theme.className);
  } else {
    theme.classList.remove("light");
    theme.classList.add("dark");
    toggleIcon.style.opacity = "1";
    localStorage.setItem("theme", theme.className);
  }
  console.log(theme.className);
}

function loadTheme() {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
  } else {
    let currentTheme = localStorage.theme;
    theme.className = currentTheme;
  }
}
window.onload = loadTheme;
//Vue.js
const Code = {
  template: "#code"
};
const Design = {
  template: "#design"
};
const NotFound = {
  template: "#page-not-found"
};
const routes = [{
    name: "Code",
    path: "/",
    component: Code
  },
  {
    name: "Design",
    path: "/design",
    component: Design
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound
  }
];
const router = new VueRouter({
  routes: routes
});
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});
router.afterEach((to, from) => {
  NProgress.done();
});
const app = new Vue({
  data: {
    loading: false,
    xChild: 0,
    yChild: 0,
    xParent: 0,
    yParent: 0,
    hover: false,
    hideCursor: true
  },
  mounted() {
    const moveCursor = e => {
      this.hideCursor = false;
      this.xChild = e.clientX ? e.clientX : e.touches[0].clientX;
      this.yChild = e.clientY ? e.clientY : e.touches[0].clientY;
      setTimeout(() => {
        this.xParent =
          e.clientX - 15 ? e.clientX - 15 : e.touches[0].clientX - 15;
        this.yParent =
          e.clientY - 15 ? e.clientY - 15 : e.touches[0].clientY - 15;
      }, 100);
    };
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchmove", moveCursor);
    window.addEventListener("touchstart", () => {
      this.hideCursor = false;
    });
    window.addEventListener("touchend", () => {
      this.hideCursor = true;
    });
  },
  router,
  el: "#app"
}).$mount("#app");
