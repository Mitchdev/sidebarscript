var main = function() {
   $('#sidetoggle').on('click', function() {
      $('#sidebar').slideToggle('slow');
   });
}

$(document).ready(main);