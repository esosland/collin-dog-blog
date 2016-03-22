$(document).ready(function() {

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#tan").click(function() {
    $("body").removeClass();
    $("body").addClass("tan-background");
  });

});
