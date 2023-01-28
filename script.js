$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}