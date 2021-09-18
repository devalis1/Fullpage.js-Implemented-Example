function slider(){
    $(document).ready(function(){
          $(".slide-toggle").click(function(){
              $(".box").animate({
                  width: "toggle"
              });
              if ($(".logo-marcas").hasClass('activeM')) {
                $(".logo-marcas").removeClass('activeM');
              }else {
                $(".logo-marcas").addClass('activeM');
              }
              
          });
      });
  }

  $(document).ready(function(){
    slider();
  });