$(function(){
    $('.folder2').click(function(e){
        e.preventDefault();
        $('.popup, #videofd').show()
        $('#about, #video, #imgvideo, #coding').hide()
    })

    $('.folder3').click(function(e){
        e.preventDefault();
        $('.popup, #coding').show()
        $('#about, #video, #imgvideo, #videofd').hide()
    })

    $('.popup .folder .fdright .top .close').click(function(e){
        e.preventDefault();
        $('.popup').hide()
    })

    // --------------------------------------------------------------

    $('main .mo .inner .power img').click(function(e){
        e.preventDefault();
        $('main .mo .inner .power').hide()
    })

    $('main .mo .inner .power .poweron').mouseenter(function(e){
        e.preventDefault();
        $('.power video').show()
        // $('.power').prepend('<video src="images/moniter.mp4" autoplay muted loop></video>')
    })
    $('main .mo .inner .power .poweron').mouseleave(function(e){
        e.preventDefault();
        $('.power video').hide()
    })

    // -----------------------------------------------------------------

    $('.tab li').click(function(e){
        // tab 있는 li를 클릭했을 때 할일
        e.preventDefault();
        // 작동되는거 멈춰!!
        $('.tab li').find('a').removeClass('active')
        // tab 에 있는 li의 a를 찾아서 active라는 클래스를 없애!!
        $(this).find('a').addClass('active')
        // 내가 선택한 li의 a를 찾아서 active 클래스를 추가해줘!!

        $('.tabitembox').hide();
        // tabitembox을 숨기고
        const idx = $(this).index();
        // idx 라는 변수에 내 번호를 매겨줘!!
        $('.tabitembox').eq(idx).show();
        // tabitembox에 있는 내번호를 보여줘!!
    })
    $('.tab li').eq(0).trigger('click')
    // li에 0번째 click 이벤트를 실행

    //-------------------------------------------------------------------------

    $('.menu li').click(function(e){
        e.preventDefault();
        $('.menu li').find('a').removeClass('active')
        $(this).find('a').addClass('active')

        $('.fdright').hide();
        const idx = $(this).index();
        $('.fdright').eq(idx).show();
    })
    $('.menu li').eq(0).trigger('click')
})