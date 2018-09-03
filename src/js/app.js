
const tabs = document.querySelectorAll('.tabs-photo');
const selectedImg = document.querySelector('.selectedImg');

if (tabs.length > 0 && selectedImg ) {
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            selectedImg.src = e.target['src'];
            tabs.forEach(elem => {
                elem.classList.remove('activeTab');
            });
            tab.classList.add('activeTab');
        })
    });
}


import {tns} from 'tiny-slider/src/tiny-slider';

var slider = tns({
    container: '.my-slider',
    items: 1,
    nav: false,
    controlsText:['', ''],
    slideBy: 'page',
    cloneCount: false,
    loop: false
});


const videoimg = document.querySelector('.btn-img-video')

videoimg.addEventListener("click", function(){
    console.log("hi");
    videoimg.style.display = "none";
})


const linkNav = document.querySelectorAll('a[href^="#"]');

    linkNav.forEach(function(item){
        item.addEventListener('click', function(e){
            console.log(item.getAttribute('data-anchor'));
            let anchor = document.getElementById(item.getAttribute('data-anchor')).getBoundingClientRect().top;
                // console.log(document.querySelector(item.getAttribute('href')).getBoundingClientRect());
            let scroller = setInterval(function() {
                window.scrollTo({
                    top: anchor,
                    behavior: "smooth"
                });
                clearInterval(scroller);
            },300);
        });

    });


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.magic-nav');
const topNav = document.querySelector('.top-nav');
const link = topNav.querySelectorAll('li');
    menuBtn.addEventListener('click', function(e){
        if(nav.classList.contains("open")){
            nav.classList.remove("open");
        }else{
            nav.classList.add("open");
        }

        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener('click', function () {
                console.log(link);
                nav.classList.remove("open");
            });
        }

    });







