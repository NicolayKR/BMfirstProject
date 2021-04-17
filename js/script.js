$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/leftArr.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/rightArr.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings:{
                dots: true,
                arrows: false
            }
        }]
    });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click',function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks,#orders').fadeOut('slow');
    });
    //Modal window
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            let text = $('.catalog-item__subtitle').eq(i).text();
            $('#orders .modal__descr').text(text);
            $('.overlay, #orders').fadeIn('slow');
        });
    });

    
    function validateForms(form){
        $(form).validate({
            rules: {
                name: "required",
                email: {
                  required: true,
                  email: true
                }
              },
              messages: {
                name: "Пожалуйста, введите ваше имя",
                email: {
                  required: "Введите вам email, и мы с вами свяжемся",
                  email: "Email - должен быть такого формата name@domain.com"
                }}
        });
    }
    validateForms('#consultation form');
    validateForms('#orders form');
    validateForms('#thanks form');
});