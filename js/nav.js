$(function(){
    
      $('#burger, #close , .menuflay').click(function(){
          $('.topmenu').toggleClass('menuactive');
          $('.menuflay').fadeToggle(200);
      });
      
})