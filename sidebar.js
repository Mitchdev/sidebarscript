var main = function() {
   $('#sidetoggle').on('click', function() {
      $('#sidebar').toggle('slide', 'left', 'slow');;
   });
}

$(document).ready(main);