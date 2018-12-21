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
      if (this.name) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.nameError="Enter a name please"
      }
      if (!this.email) {
     this.emailError="Let's enter an email, shall we?"
      }
      if (!this.msg) {
        this.msgError="Please enter a message"
      }
      e.preventDefault();
    }
  }
});
//particles.js config
particlesJS("particles-js", {

  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "color": {
      "value": "#C0C0C0"
    },
    "shape": {
      "type": ["circle", "triangle", "polygon"],
      "stroke": {
        "width": 0,
        "color": "#0198E1"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "https://res.cloudinary.com/simplytammy/image/upload/v1544838825/hero-background.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.6,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.8,
      "direction": "random",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 3600,
        "rotateY": 3600
      }
    }
  },



  "interactivity": {
    "detect_on": "canvas",

    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },

      "onclick": {
        "enable": true,
        "mode": "remove"
      },
      "resize": true
    },

    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 4,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      },

      "repulse": {
        "distance": 200,
        "duration": 0.5
      },

      "push": {
        "particles_nb": 5
      },

      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

////===========> Vanilla JS <==============

// Testimonial carousel
let testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 6500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function() {
    function playSlide(slide) {
        for (let k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (let l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
    
    testim.addEventListener("touchstart", function(e) {
        touchStartPos = e.changedTouches[0].clientX;
    })
  
    testim.addEventListener("touchend", function(e) {
        touchEndPos = e.changedTouches[0].clientX;
      
        touchPosDiff = touchStartPos - touchEndPos;
      
        console.log(touchPosDiff);
        console.log(touchStartPos); 
        console.log(touchEndPos); 

      
        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
          return;
        }
      
    })
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



