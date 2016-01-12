var main = function() {
  $('#sidetoggle').click(function() {
    $('#sidebar').animate({
      margin-left: "0px"
    }, 200);
  });


  $('#sidetoggle').click(function() {
    $('#sidebar').animate({
      margin-left: "-285px"
    }, 200);
  });
};

$(document).ready(main);