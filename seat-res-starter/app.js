 $(document).ready(function () {
      var bHeight = $("body").height();
      var vpHeight = $(window).height();
      if (vpHeight > bHeight) {
        $("footer#sticky").css("position","absolute").css("bottom",0);
      }
    });