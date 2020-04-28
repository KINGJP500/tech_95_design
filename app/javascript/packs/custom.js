alert('hello world');

var ready;

ready = function(){
  $('.sortable').sortable();
}

$(document).ready(ready);

// if using turbolinks
$(document).on('page:load', ready);
