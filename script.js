function openNav() {
          document.getElementById("mySidenav").style.width = "350px";
        }
        
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#topNubex').fadeIn();
    } else {
    $('#topNubex').fadeOut();
    }
  });
  $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},700);
  });
});