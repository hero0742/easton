$(document).ready(function(){
    // 初始化 Slick Slider
    $('.articles-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        centerMode: true,
        centerPadding: '60px'
    });

    // 平滑滚动
    $('nav a').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });
});