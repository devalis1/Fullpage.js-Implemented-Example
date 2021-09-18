
function menuMobilec() {
  $('#navbarSupportedContent').on('show.bs.collapse', function () {
    $('body').addClass('menu-open');
    $('header .navbar-collapse').addClass('selected');

    $('html, body').animate({
      scrollTop: $('header nav').offset().top
    }, 700);
  });

  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    $('body').removeClass('menu-open');
    $('header .navbar-collapse').removeClass('selected');
  });
}

function menuMobile() {
  $('.navbar-toggler').on('click', function (e) {
    $(this).toggleClass('selected');
    $('.mobileMenu').toggleClass('selected');
    $('header').toggleClass('fixed-top');
    $('.static').toggleClass('static-active');
  });

  $("header .nav-item .nav-link").on('click', function () {
    $('.navbar-toggler').trigger('click');
  });
}

function anclasanimadas() {
  $('.ancla').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
}

function selectMenu() {
  var sections = $('section');
  var margin = 100;

  for (i = 0; i < sections.length; i++) {
    if ($('.navbar-nav li a[href="#' + sections[i].id + '"]').length) {
      if ($(window).scrollTop() > Math.round($('#' + sections[i].id).offset().top - margin)) {
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li a[href="#' + sections[i].id + '"]').parent().addClass('active');
      }
    }
  }

  if ($(window).scrollTop() < margin) {
    $('.navbar-nav li').removeClass('active');
    $('.navbar-nav li a[href="#"]').parent().addClass('active');
  }
}

function initPageScroll() {
  $('a.page-scroll').bind('click', function (event) {
    event.preventDefault();
    var $anchor = $(this);
    var section = $anchor.attr('href');

    if (section == '#') {
      section = 'body';
    }

    $('#navbarSupportedContent').collapse('hide');

    $('html, body').stop().animate({
      scrollTop: ($(section).offset().top)
    }, 1000);
  });
}

function btnToTop() {
  //btn to top
  $(window).on('scroll resize', function () {
    var windowTop, windowBottom, heightfoo, stoptop, stopbottom, btnIni;

    //dimensiones footer & pag
    windowTop = $(document).scrollTop();
    heightfoo = $('footer').height();
    windowBottom = windowTop + window.innerHeight;
    windowBottomZone = windowBottom + 50;
    stoptop = $('footer').offset().top;
    fh = $('footer').height();
    fhFin = fh - 250;
    stopbottom = stoptop + $('footer').height();
    stopbottom2 = stoptop + fhFin;

    //Btn to top
    btnIni = $('.ico-top');
    btnIni.addClass('visible');

    if (stopbottom < windowBottomZone) {
      btnIni.css('margin-bottom', heightfoo - 35);
      btnIni.addClass("bottom");
    } else {
      btnIni.css('margin-bottom', 0);
      btnIni.removeClass("bottom");
    }

    if (windowTop == 0) {
      btnIni.removeClass('visible');
    }

  });
}

$(document).scroll(function () {
  if (!$('nav.navbar').hasClass('navbar-internal')) {
    selectMenu();
    initPageScroll();
  }
});

$(window).resize(function () {
  cardActions();
});

$('.allow-scroll').on('click', function (e) {
  e.preventDefault();
  let iframe = $(this).siblings('iframe');
  let url = iframe.attr('src');
  iframe.attr('src', url + "&autoplay=1");
  $(this).remove();
})


function NavStickyclass() {
  $(function () {
    var header = $('header');
    var header_offset = header.offset();

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > header_offset.top) {
        header.addClass('selected');
      } else {
        header.removeClass('selected');
      }
    });
  });

  setInterval(function () {
    $(function () {
      var header = $('header');
      var header_offset = header.offset();
      if ($(window).scrollTop() > header_offset.top) {
        header.addClass('sticky');
      }
    });
  }, 500);

}

function skipToMain() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainloader").style.display = "block";
}

function showtext() {
  document.getElementById("partnersUniqueText").style.display = "block";
}

function silentToMain() {
  console.log("working");
  $.fn.fullpage.silentMoveTo("aed");
  $.fn.fullpage.setAllowScrolling(true, 'up, down');
  document.getElementById("fp-nav").style.display = "block";
  document.getElementById("fp-navbar").style.display = "block";
  $('#partners_navItem').removeClass('active');
  $('#home_navItem').addClass('active');

}

function silentToPartners() {
  console.log("working");
  $.fn.fullpage.silentMoveTo("partners");
  document.getElementById("fp-nav").style.display = "none";
  document.getElementById("fp-navbar").style.display = "none";

}

function loader() {
  if ($(window).width() > 550) {
    var loadersT;
    function loaderTime() {
      loadersT = setTimeout(showPage, 4000);
    }
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("mainloader").style.display = "block";


      // document.getElementById("loader").css("display",) = "none";
      // document.getElementById("mainloader").style.display = "block";
    }
    loaderTime();
  }
}

$(".nav .nav-item").on("click", function () {
  $(".nav").find(".active").removeClass("active");
  $(this).addClass("active");
});

function removeDedicated() {
  console.log('should remove class')
  $('#collapseExample2').removeClass('show');
}

function removeCircuit() {
  console.log('should remove class')
  $('#collapseExample').removeClass('show');
}


$('.contactPage').on("click", function () {
  $.fn.fullpage.setAllowScrolling(false, 'down, up');
  $.fn.fullpage.setKeyboardScrolling(false, 'down, up, left');
  $.fn.fullpage.moveTo('aed', 'theNextMove');
  document.getElementById("fp-nav").style.display = "none";
  document.getElementById("fp-navbar").style.display = "none";

})
$('.backToHomePage').on("click", function () {
  $.fn.fullpage.setAllowScrolling(true, 'down, up');
  $.fn.fullpage.setKeyboardScrolling(true, 'down, up');
  document.getElementById("fp-nav").style.display = "block";
  document.getElementById("fp-navbar").style.display = "block";
  $('#contact_navItem').removeClass('active');
  $('#home_navItem').addClass('active');
})


$('#lottie_call').append('<div id="lottie_home" class="position-absolute"></div>');

/*jQuery Global Functions*/
$(document).ready(function () {

  anclasanimadas();
  NavStickyclass();
  menuMobile();
  // btnToTop();
  loader();

  window.onorientationchange = function () {
    var orientation = window.orientation;
    switch (orientation) {
      case 0:
      case 90:
      case -90: window.location.reload();
        break;
    }
  };
});

