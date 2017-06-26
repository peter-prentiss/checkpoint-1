let counter = 0;

$(document).ready(function() {
  $('.container').append('<button>Generate</button>');
  $('button').click(function() {
    console.log('working');
    $('.container').append('<div id="new-div' + counter + '"></div>');
    $('#new-div' + counter+'').append('<p>' + counter + '</p>')
    .append('<button id="swap">Swap</button><button id="delete">Delete</button>');
      counter++;
  });
  $('.container').on('click', '#swap', function() {
    $(this).parent().toggleClass('yellow');
  });
  $('.container').on('click', '#delete', function() {
    $(this).parent().remove();
  })
});
