AOS.init();


//sticky header

$(window).scroll(function() {

    if ($(window).scrollTop() >40) {
        $('.navigation').addClass('sticky');
    } else {
        $('.navigation').removeClass('sticky');
    }
});

var menutoggle = document.querySelector('.toggle');
var navtoggle = document.querySelector('.navigation');
    menutoggle.onclick = function(){
        menutoggle.classList.toggle('active');
        navtoggle.classList.toggle('active');
    }