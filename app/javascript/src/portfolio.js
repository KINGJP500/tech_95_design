var ready, set_positions;


set_positions = function() {
  $('.card').each(function(i) {
    $(this).attr('data-pos', i + 1);
  });
}

ready = function() {

  set_positions();

  $('.sortable').sortable();

  $('.sortable').sortable().on('sortupdate', function(e, ui) {
    //var updated_order;
    updated_order = [];
    set_positions();

    $('.card').each(function(i) {
      updated_order.push({
        id: $(this).data('id'),
        position: i + 1
      });
    });
    console.log(updated_order);

    $.ajax({
      type: 'PUT',
      url: '/portfolios/sort',
      data: {
        order: updated_order
      }
    });
  });
};

$(document).ready(ready);

//if using turbolinks
$(document).on('page:load', ready);
