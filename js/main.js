function slowScroll(id) {
  $("html, body").animate({
    scrollTop: $(id).offset().top - 20
  },300);
  return false;
  // функция вызываемая в шапке html, плавный скролл к выбранным блокам(id)
}

$('.video-play, .close-button').on('click', function() {
  $('#modal-video').toggle();
  $("body").toggleClass("overflow-hidden");/*чтоб страница не скролилась*/
  resizeVideo();
});

$(window).on('resize', function() {
  resizeVideo();
}).resize();
// при изменении размера экрана вызов функции resizeVideo()


function resizeVideo() {
  $("iframe").each(function() {
    let width = $(this).width();
    $(this).css("height", width / 1.77 + "px");
  });
  // для каждого iframe, задаем переменную ширине текущего элемента, для этого элемента высота = ширина / 1,77
}

                                      // работа с формой

$('#sub_form button').click(function() {
  let email = $('#email').val(); /*берем введенные данные из поля ввода*/
  if(email.split("@").length !=2 || email.split(".").length !=2) { /*проверка на знаки @ и . */
    $("#sub_form label").text("Неверный email");/*вписываем в label текст*/
    $("#sub_form label").fadeIn()
  }
  setTimeout(function() {
    $("#sub_form label").fadeOut() /*скрываем label за 1,5 секунды*/
  }, 1500)
})
$(".download a").click(function() {
  return false
})

$(".menu").click(function() {
  if($(".mobile-menu").is(":visible"))
    $(this).html('<i class="fas fa-bars"></i>');
  else
    $(this).html('<i class="fas fa-times"></i>')
  $('.mobile-menu').slideToggle(500)
})
