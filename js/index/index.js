"use strict";

// main
// section1



const gallery1 = document.querySelector(".gallery1");
const gallery1Ul = gallery1.querySelector("ul");
const gallery1UlLi = gallery1.querySelectorAll("li");
const spanArrow = document.querySelectorAll("span.arrow");

const fisrtClone1 = gallery1Ul.firstElementChild.cloneNode(true);
const lastClone1 = gallery1Ul.lastElementChild.cloneNode(true);

gallery1Ul.prepend(lastClone1);
gallery1Ul.append(fisrtClone1);

let i = 0;
let setOut

function autoGallery1() {
    i++;
    const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
    const goto = (-gap * i) + "px";
    // console.log(i);
    // console.log(gap,goto);

    if (i > gallery1UlLi.length) {
        gallery1.style.left = 0;
        gallery1.style.transition = 0 + 'ms';
        i = 0;
        setOut = setTimeout(autoGallery1, 0);
    } else {
        gallery1.style.left = goto;
        gallery1.style.transition = 'all 1s ease-in-out';
        setOut = setTimeout(autoGallery1, 5000);
    }
}

(() => autoGallery1())();

// arrow 이동

function autoGallery1Fn(j) {
    const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
    const goto = (-gap * j) + 'px';
    gallery1.style.left = goto;
    gallery1.style.transition = 'all 1s ease-in-out';
    if (j <= 0) {
        j = gallery1UlLi.length;
    }

}

spanArrow.forEach((el, idx) => {
    el.addEventListener("click", () => {
        if (idx == 0) {
            if (i <= 0) {
                i = gallery1UlLi.length;
                const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
                const goto = (-gap * i) + 'px';
                gallery1.style.left = goto;
                gallery1.style.transition = "0s";
            }
            i--;
            autoGallery1Fn(i);
        } else {
            if (i == gallery1.length) {
                gallery1.style.left = 0;
                gallery1.style.transition = "0s";
            }
            i++;
            autoGallery1Fn(i);
        }
    })
});

// section2

const gallery2 = document.querySelector(".gallery2");
const gallery2Ul = document.querySelector(".gallery2 ul");
const gallery2UlLi = document.querySelectorAll(".gallery2 li");
const fadeGalleryLi = document.querySelectorAll(".fadeLi");
const arrow2 = document.querySelector(".arrow2");

let i2 = 0;
let setOut2;

function autoGallery2() {
    i2++;
    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
    const goto = (-gap * i2) + "px";
    // console.log(i2);
    if (i2 > gallery2UlLi.length - 2) {
        gallery2.style.left = 0;
        gallery2.style.transition = 0 + 'ms';
        i2 = 0;
        setOut2 = setTimeout(autoGallery2, 0);
    } else {
        gallery2.style.left = goto;
        gallery2.style.transition = 'all 1s ease-in-out';
        setOut2 = setTimeout(autoGallery2, 5000);
    }

    fadeGalleryLi.forEach((el, idx) => {
        if (idx == i2) {
            el.classList.add("fadeLiOn");
        } else {
            el.classList.remove("fadeLiOn");
        }
    });

}

(() => autoGallery2())();

function autoGallery2Fn(j2) {
    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
    const goto = (-gap * i2) + 'px';
    gallery2.style.left = goto;
    gallery2.style.transition = 'all 1s ease-in-out';
}

arrow2.addEventListener('click', (e) => {
    // console.log(e.target);
    console.log(i2);
    if (i2 == gallery2UlLi.length - 2) {
        gallery2.style.left = 0;
        gallery2.style.transition = '0s';
        i2 = 0;
    }
    i2++;
    autoGallery2Fn(i2);

    fadeGalleryLi.forEach((el, idx) => {
        if (idx == i2) {
            el.classList.add("fadeLiOn");
        } else {
            el.classList.remove("fadeLiOn");
        }
    });
});

// section3

const gallery3 = document.querySelector(".gallery3");
const gallery3UlLi = gallery3.querySelectorAll("li");
const spanArrow3 = document.querySelector(".arrows3");
const spanArrow3Sapn = document.querySelectorAll(".arrows3 span.arrow");
const bCon3Li = document.querySelectorAll(".bcon li");

let i3 = 0;

function gallery3Fn(i3) {
    const gap = gallery3UlLi[1].offsetLeft - gallery3UlLi[0].offsetLeft;
    const goto = (gap * -i3) + "px";
    gallery3.style.left = goto;
    gallery3.style.transition = "all 0.5s ease-in-out";
    if (i3 < 0) {
        i3 = gallery3UlLi.length - 3;
        gallery3.style.transition = "0s";
    }
    bCon3Li.forEach((el, idx) => {
        let idx2 = i3;
        if (idx2 == gallery3UlLi.length - 3) {
            el.classList.remove("bconLiOn");
            idx2 == 0;
        }
        if (idx2 == idx) {
            el.classList.add("bconLiOn");
        }
    });
}

spanArrow3.addEventListener("click", (e) => {
    spanArrow3Sapn.forEach((el, idx) => {
        if (e.target == el) {
            if (idx == 1) {
                if (i3 == gallery3UlLi.length - 3) {
                    i3 = 0;
                    gallery3.style.left = 0;
                    gallery3.style.transition = "0s";
                }
                i3++;
                gallery3Fn(i3);
            } else {
                if (i3 == 0) {
                    i3 = gallery3UlLi.length - 3;
                    const gap = gallery3UlLi[1].offsetLeft - gallery3UlLi[0].offsetLeft;
                    const goto = (-gap * i3) + "px";
                    gallery3.style.left = (-gap * i3) + "px";
                    gallery3.style.transition = "0s";
                }
                i3--;
                gallery3Fn(i3);
            }
        }
    });
    console.log(i3);
});

// section4

const gallery4 = document.querySelector(".gallery4");
const gallery4UlLi = gallery4.querySelectorAll("li");
const rImgConOne = document.querySelector(".imgR-box.one");
const rImgConTwo = document.querySelector(".imgR-box.two");
const rImgConThree = document.querySelector(".imgR-box.three");


function stickyGallery4(i4) {
    const gap = gallery4UlLi[1].offsetLeft - gallery4UlLi[0].offsetLeft;
    const goto = (-gap * i4) + "px";
    gallery4.style.left = goto;
    gallery4.style.transition = "all 0.4s ease-in-out";
}

window.addEventListener("scroll", () => {
    const winScrollT = window.scrollY;
    const rImgConOneST = rImgConOne.offsetTop;
    const rImgConTwoST = rImgConTwo.offsetTop;
    const rImgConThreeST = rImgConThree.offsetTop;

    if (winScrollT >= rImgConOneST) {
        stickyGallery4(0);
    }
    if (winScrollT >= rImgConTwoST) {
        stickyGallery4(1);
    }
    if (winScrollT >= rImgConThreeST) {
        stickyGallery4(2);
    }

});

// section6

const gallery6 = document.querySelector(".gallery6");
const gallery6UlLi = gallery6.querySelectorAll(".gallery6 li");


let i6 = 0;

function autoGallery6() {
    i6++;
    const gap = gallery6UlLi[1].offsetLeft - gallery6UlLi[0].offsetLeft;
    const goto = (-gap * i6) + "px";
    // console.log(i6);
    if (i6 > gallery6UlLi.length - 5) {
        i6 = 0;
        gallery6.style.left = 0
        gallery6.style.transition = "0s";
        setTimeout(autoGallery6, 0);
    } else {
        gallery6.style.left = goto;
        gallery6.style.transition = "all 0.7s ease-in-out";

    }
}

(() => autoGallery6())();
let setIn6 = setInterval(autoGallery6, 4000);

