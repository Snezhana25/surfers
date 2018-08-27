// let oTab = document.getElementById('photo-tab');
// let oLis = oTab.getElementsByClassName('tabs-photo');
// let oDivs = oTab.getElementsByClassName('.photo');
//
// for (let i = 0; i < oLis.length; i++) {
//     let oLi = oLis[i];
//     oLi.n = i;
//     oLi.onclick = function () {
//         for (var j = 0; j < oLis.length ; j++) {
//             oLis[j].classList = '';
//             oDivs[j].className = '';
//         }
//         console.log(this);
//         this.className = "active-photo";
//         oDivs[this.n].className = "active-photo";
//     };
// }


const tabs = document.querySelectorAll('.tabs-photo');
const selectedImg = document.getElementById('selected-img');

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

(function () {

    var slides = document.querySelectorAll('.testimonial-item'),
        arrows = document.querySelectorAll('.arrow'),
        carouselCount = 0,
        scrollInterval,
        interval = 5000;

    arrows[0].addEventListener('click', function (e) {
        e.preventDefault();
        carouselCount -= 100;
        slider();
        if (e.type !== 'autoClick') {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(autoScroll, interval);
        }
    });
    arrows[1].addEventListener('click', sliderEvent);
    arrows[1].addEventListener('autoClick', sliderEvent);

    function sliderEvent(e) {
        e = e || window.event;
        e.preventDefault();
        carouselCount += 100;
        slider();
        if (e.type !== "autoClick") {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(autoScroll, interval);
        }
    }

    function slider() {
        switch (carouselCount) {
            case -100:
                carouselCount = 0;
                break;
            case 300:
                carouselCount = 0;
                break;
            default:
                break;
        }
        console.log(carouselCount);
        for (var i = 0; i < slides.length; i += 1) {
            slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
        }
    }

    // create new Event to dispatch click for auto scroll
    var autoClick = new Event('autoClick');
    function autoScroll() {
        arrows[1].dispatchEvent(autoClick);
    }

    // set timing of dispatch click events
    // scrollInterval = setInterval(autoScroll, interval);

})();




