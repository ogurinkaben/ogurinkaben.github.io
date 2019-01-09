//<============ Vue.js <============+
const app = new Vue({
  el: '#vueInit',
  data: {
    nameError:null,
    emailError:null,
    msgError:null,
    name: null,
    email: null,
    phone:null,
    msg: null
  },
  methods:{
    checkForm: function (e) {
      if (!this.name) {
        this.nameError="Enter a name please";
        e.preventDefault();
      } else {
        this.nameError="";
      }
      if (!this.email) {
     this.emailError="Let's enter an email, shall we?";
     e.preventDefault();
      } else {
        this.emailError="";
      }
      if (!this.msg) {
        this.msgError="Please enter a message";
        e.preventDefault();
      } else {
        this.msgError="";
      }

    },
  }
});
//===========> Vanilla JS <============== 
window.onload = function () {
  //preloader
  var delayLoad;

  function preLoad() {
    delayLoad = setTimeout(showPage, 4000);
  }
  preLoad();
  function showPage() {
        document.getElementById("vueInit").style.display = "block";
    document.querySelector('body').style.backgroundColor = "#FFFFFF";
    document.getElementById("loader").style.display = "none";

  }
}
//============> jQuery <==============

$(document).ready(function() {
  // Smooth scrolling
  let scrollLink = $('.scroll');

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Back to top

  let btn = $('#top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
//Tooltip init
  $('[data-toggle="tooltip"]').tooltip();
  
  
});



