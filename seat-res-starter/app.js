 $(document).ready(function () {
      var currentSeat;
      var bHeight = $("body").height();
      var vpHeight = $(window).height();
      if (vpHeight > bHeight) {
        $("footer#sticky").css("position","absolute").css("bottom",0);
      };

 $(".available").on('click', function(){
    $('.form-Toggle').slideToggle('slow')
    $(this).toggleClass('reserved')
      currentSeat = $(this);
   });   
 $('button').on('click', function(e){
    e.preventDefault();
      var inputs = $('form').serializeArray();
      var formObj = {};
      $.each(inputs, function (i, input) {
        formObj[input.name] = input.value;
      });
      currentSeat.prepend(formObj.firstname, '<br>', formObj.lastname);
      
 });
 });



