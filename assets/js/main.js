AOS.init();


//sticky header

$(window).scroll(function() {

    if ($(window).scrollTop() > 40) {
        $('.navigation').addClass('sticky');
    } else {
        $('.navigation').removeClass('sticky');
    }
});

//sticky search

$(window).scroll(function() {

    if ($(window).scrollTop() > 40) {
        $('.search-form').addClass('sticky');
    } else {
        $('.search-form').removeClass('sticky');
    }
});
// menubar toggle
var menutoggle = document.querySelector('.toggle');
var navtoggle = document.querySelector('.navigation');
    menutoggle.onclick = function(){
        menutoggle.classList.toggle('active');
        navtoggle.classList.toggle('active');
    }

//  search toggle c1

var searchtoggle_open = document.querySelector('.open-search');
var searchtoggle_close = document.querySelector('.close-search');
searchtoggle_open.onclick = function(){
    $('.search-form').addClass('open-search-a');
}
searchtoggle_close.onclick = function(){
    $('.search-form').removeClass('open-search-a');
}

// c2

// $(".close-search").click(function(){
//     $(".search-form").hide();
// });
// $(".open-search").click(function(){
//     $(".search-form").show();
// });