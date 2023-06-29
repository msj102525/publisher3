"use-strict";

const bestImgBoxImg = document.querySelectorAll(".best-box .img-box img");

const arrBg = {
    arrSrc: [],
    arrAlt: []
}

for (let i = 0; i < bestImgBoxImg.length; i++) {
    arrBg.arrSrc.push(`img/best/bestImg${i}.jpg`);
    arrBg.arrAlt.push(`best-img${i}`);
    bestImgBoxImg[i].setAttribute('src',arrBg.arrSrc[i]);
    bestImgBoxImg[i].setAttribute('alt',arrBg.arrAlt[i]);
}

const titleUl = document.querySelector(".title-box>ul");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const winScrollT = window.scrollY;
    // console.log(winScrollT);
    if (winScrollT > 0) {
        titleUl.classList.add("ulS");
    }else {
        titleUl.classList.remove("ulS");        
    }
});
window.addEventListener("click",(e)=>{
    console.log(e.target);
});