 $(document).ready(function () {
      var bHeight = $("body").height();
      var vpHeight = $(window).height();
      if (vpHeight > bHeight) {
        $("footer#sticky").css("position","absolute").css("bottom",0);
      };
 });

 $(document).ready(function () {
 $(".available").on('click', function(){
    $('.form-Toggle').slideToggle('slow')
    $(this).toggleClass('reserved');
  });   
 });


