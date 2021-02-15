$("body").on("click",".map-content span", function() {
    $(this).hide();
  })

  $("body").on("click",".toggler-menu", function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
    $('.inner-header').toggleClass('open-menu');
    if ($('.inner-header').hasClass('open-menu')) {
      $('.logo img').attr('src','/img/logo.svg')
    }
    else (
      $('.logo img').attr('src','/img/logo-color.svg')
    )
  })

  $("body").on("click",".open-catalog", function() { 
      $('.left-sidebar').toggleClass('open');
      if ($('.left-sidebar').hasClass('open')) {
        $(this).html('Закрыть каталог');
      }
      else {
        $(this).html('Открыть каталог');
      }
  })

  $("body").on("click",".close-left-sidebar", function() { 
    $('.left-sidebar').toggleClass('open');
    $('.open-catalog').html('Открыть каталог');

})

  $(function () {
    //2. Получить элемент, к которому необходимо добавить маску
    $('input[name="phone"]').mask("9 (999) 999-9999");
  });
  


$(document).ready(function() {
  $('.header__contacts').clone().appendTo('nav');
})

