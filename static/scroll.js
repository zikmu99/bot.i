$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    var message = $('.messagecontainer').first().clone();
    message.find('p').text($('input').val());
    message.prependTo('.chatbox');
    $('input').val('');
  });
});