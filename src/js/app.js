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





