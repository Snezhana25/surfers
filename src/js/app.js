(function () {
    "use strict";


    const loading = document.querySelector('.loading');
    setTimeout(function() {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 3000);

    const tabs = document.querySelectorAll('.tabs-photo');
    const selectedImg = document.querySelector('.selectedImg');
    const sdImg = document.querySelector('.sdImg');

    if (tabs.length > 0 && selectedImg || tabs.length > 0 && sdImg) {
        tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => {
                e.stopPropagation();
                if (tab.classList.contains('tabs-slide1')) {
                    selectedImg.src = tab.childNodes[0].src;
                } else {
                    tab.classList.contains('tabs-slide2');
                    sdImg.src = tab.childNodes[0].src;
                }
                tabs.forEach(elem => {
                    elem.classList.remove('activeTab');
                });
                tab.classList.add('activeTab');
            }, true)
        });

    }

    const videoimg = document.querySelector('.btn-img-video');
    const iframe = document.querySelector('.iframe');

    videoimg.addEventListener("click", function (event) {
        console.log(event.target);
        videoimg.style.display = "none";
        const iframeEl = document.createElement('iframe');
        iframeEl.src = 'https://www.youtube.com/embed/DkeiKbqa02g?;autoplay=1&;';
        iframe.appendChild(iframeEl);
    });

    const linkNav = document.querySelectorAll('a[href^="#"]');

    linkNav.forEach(function (item) {
        item.addEventListener('click', function () {
            let anchor = document.getElementById(item.getAttribute('data-anchor')).getBoundingClientRect().top;
            let scroller = setInterval(function () {
                window.scrollTo({
                    top: anchor,
                    behavior: "smooth"
                });
                clearInterval(scroller);
            }, 300);
        });
    });


    const menuBtn = document.querySelector('.menu-btn');
    const topNav = document.querySelector('.top-nav');
    const link = topNav.querySelectorAll('li');
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('clicked');
        topNav.classList.toggle('show');
        document.body.classList.toggle('overlay');
        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener('click', function () {
                topNav.classList.remove("show");
                menuBtn.classList.remove('clicked');
                document.body.classList.remove('overlay');
            });
        }

    });


    // const btn = document.querySelector('.menu-btn');
    // const scrollnav = document.querySelector('.top-nav');
    // let menu ;
    // btn.addEventListener('click', function () {
    //     if (scrollnav.classList.contains('show')) {
    //         document.body.classList.add('overlay');
    //         menu = true;
    //         console.log(menu);
    //     } else {
    //         menu = false;
    //         document.body.classList.remove('overlay');
    //         console.log(menu);
    //     }
    //
    // });




})();








