const toggler = document.querySelector('.navbar > .toggler'),
    navListContainer = document.querySelector('.navbar > .nav-list-container');

/*when toggler button is clicked*/
toggler.addEventListener(
    "click",
    () => {
        //convert hamburger to close
        toggler.classList.toggle('cross');
        //make nav visible
        navListContainer.classList.toggle('nav-active');
    },
    true
);
$(".start-date").find("input").pDatepicker({ initialValue: false, 'position': [43, -27], format: 'YYYY/MM/DD' });
$("#BirthDate").pDatepicker({ initialValue: false, 'position': [43, -27], format: 'YYYY/MM/DD' });

$('.owl-carousel').owlCarousel({
    loop:true,
    stagePadding: 0,
    margin:10,
    nav:true,
    navText: ["<i class='fa fa-arrow-left font-30'></i>","<i class='fa fa-arrow-right font-30'></i>"],
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
//TimeLine
var count = $(".box-container").find("li").length;
var x = 3;
var y = count % x;
if (y == 1) {
    $(".box-container").append(
        '<li class="before-none"><div></div></li> <li class="before-none"><div></div></li>'
    );
}
if (y == 2) {
    $(".box-container").append('<li class="before-none"><div></div></li>');
}

$("#emaillogin").click(function () {
    $("#mobilelogin").css("display", "block");
    $("#mobilelogincontainer").css("display", "none");
    $("#emaillogin").css("display", "none");
    $("#emaillogincontainer").css("display", "block");
});
$("#mobilelogin").click(function () {
    $("#emaillogin").css("display", "block");
    $("#emaillogincontainer").css("display", "none");
    $("#mobilelogin").css("display", "none");
    $("#mobilelogincontainer").css("display", "block");
});