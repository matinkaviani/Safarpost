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
$(".end-date").find("input").pDatepicker({ initialValue: false, 'position': [43, -27], format: 'YYYY/MM/DD' });

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