$(function () {
    
  $(window).scroll(function(){
      var sc = $(this).scrollTop();
        if(parseInt(sc) >= parseInt($('.hall1').offset().top)-200){
            $('.salonu').addClass('salonu_active');
            $('.dans').addClass('dans_active');
            $('.dancer').addClass('dancer_active');
            $('.dancershadow').addClass('dancershadow_active')
        }
        if(parseInt(sc) >= parseInt($('.detay2 p').offset().top)){
            $('#boxer1').addClass('box-show');
        }
  })

  function intro(){
    var i = 0;
    var scrollM = 0.05;
    var opacity = 1;
    var lastScrollTop = 0;
    circleDefault = $('circle').css('r').split('%');

    $(window).on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
           
            if (parseInt($('circle').attr('r')) > 105) {
                $('body').css('overflow-y','scroll');
                return 0;
            } else {
                i += 3;
                newR = parseInt(circleDefault[0]) + i;
                opacity = opacity - scrollM;
                $('circle').attr('r', +newR + '%')
                $('#logo>img , #scrollIt').css('opacity', opacity)
            }
        } else {
            if (i <= 0) {

            } else {
                if($(window).scrollTop() == 0){
                    i -= 3;
                    newR = parseInt(circleDefault[0]) + i;
                    opacity = opacity + scrollM;
                    $('circle').attr('r', +newR + '%')
                    $('#logo>img , #scrollIt').css('opacity', opacity)
                } else {
                    return 0;
                }
            }
         }
        return false;
      });
  }
   
   function detectmob() { 
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
            $('body').addClass('mobilegesture');
            return true;
        }
        else {
           intro();
        }
    }
    detectmob();

}) 