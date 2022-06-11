$(document).ready(function () {
    // goTop
    $('.btn-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 700);
    })
    // 常見問題
    $('.QA-item').click(function (e) {
        e.preventDefault();
        $(this).find('.QA-title').toggleClass('active');
        $(this).find('.QA-collapse').slideToggle();
        $(this).siblings().find('.QA-title').removeClass('active');
        $(this).siblings().find('.QA-collapse').slideUp();
    })
    // 方案計算
    $('.people-btn').click(function (e) {
        base = 600;
        standard = 1600;
        e.preventDefault();
        const btn = $(this).text();
        if (btn === '10000位'){
            $('.subscribe-num').text(10000);
            $('.monthly-num').text(base);
            $('.monthly-num-standard').text(standard);
        }
        if (btn === '15000位'){
            $('.subscribe-num').text(15000);
            $('.monthly-num').text(base*1.5);
            $('.monthly-num-standard').text(standard*1.5);
        }
        if (btn === '20000位'){
            $('.subscribe-num').text(20000);
            $('.monthly-num').text(base*2);
            $('.monthly-num-standard').text(standard*2);
        }
        if (btn === '25000位'){
            $('.subscribe-num').text(25000);
            $('.monthly-num').text(base*2.5);
            $('.monthly-num-standard').text(standard*2.5);
        }
        if (btn === '>25000位'){
            $('.subscribe-num').text('>25000');
            $('.monthly-num').text(base*3);
            $('.monthly-num-standard').text(standard*3);
        }
    })
})