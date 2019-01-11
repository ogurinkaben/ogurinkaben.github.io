//<============ Vue.js <============
const Main = {
    data: function () {
        return {
            nameError: null,
            emailError: null,
            msgError: null,
            name: null,
            email: null,
            phone: null,
            msg: null
        }
    },

    methods: {
        checkForm: function (e) {
            if (!this.name) {
                this.nameError = "Enter a name please";
                e.preventDefault();
            } else {
                this.nameError = "";
            }
            if (!this.email) {
                this.emailError = "Let's enter an email, shall we?";
                e.preventDefault();
            } else {
                this.emailError = "";
            }
            if (!this.msg) {
                this.msgError = "Please enter a message";
                e.preventDefault();
            } else {
                this.msgError = "";
            }

        },
    },
    template: '#main'
}
const About = {
    data: function () {
        return {
            nameError: null,
            emailError: null,
            msgError: null,
            name: null,
            email: null,
            phone: null,
            msg: null,
        }
    },

    methods: {
        checkForm: function (e) {
            if (!this.name) {
                this.nameError = "Enter a name please";
                e.preventDefault();
            } else {
                this.nameError = "";
            }
            if (!this.email) {
                this.emailError = "Let's enter an email, shall we?";
                e.preventDefault();
            } else {
                this.emailError = "";
            }
            if (!this.msg) {
                this.msgError = "I really want to understand your project";
                e.preventDefault();
            } else {
                this.msgError = "";
            }
        },
    },
    template: '#project-planner'
}

const routes = [{
        path: '/',
        component: Main
    },
    {
        path: '/project-planner',
        component: About
    },
]

const router = new VueRouter({
    routes
});
const app = new Vue({
    router,
    el: '#vueInit',


}).$mount('#vueInit');