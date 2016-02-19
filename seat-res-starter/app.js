 $(document).ready(function () {
      var currentSeat;
      var available, 
          availSeat,
          reserved;
      var seatChart = $('.seat-chart');
      for (var i = 1; i <= 24; i++) {
        var $div = $('<div />').appendTo('.seat-chart');
        // seats[i]
        $('div').addClass("available");
        $('div').addClass("availSeat");
      

      }

       $(".available").on('click', function(){
          $('.form-Toggle').slideToggle('slow')
          // $(this).toggleClass('reserved')
            currentSeat = $(this);
          var $div = $('<div />').appendTo('section');   
           $('div').append(available);
         }); 

  $('button').on('click', function(e){
      $('.available').removeClass('available').addClass('reserved');
      $('.availSeat').removeClass('.availSeat').addClass('reserved');
    e.preventDefault();
      var inputs = $('form').serializeArray();
      var formObj = {};
      $.each(inputs, function (i, input) {
        formObj[input.name] = input.value;
      });
      currentSeat.prepend(formObj.firstname, '<br>', formObj.lastname);
      
 });
 });



