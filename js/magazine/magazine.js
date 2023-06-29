"use-strict";

const magazineImgBoxImg = document.querySelectorAll(".magaz-box .img-box img");

const arrBg = {
    arrSrc: [],
    arrAlt: []
}

for (let i = 0; i < magazineImgBoxImg.length; i++) {
    arrBg.arrSrc.push(`img/magazine/magazine${i}.jpg`);
    arrBg.arrAlt.push(`magazine-img${i}`);
    magazineImgBoxImg[i].setAttribute('src',arrBg.arrSrc[i]);
    magazineImgBoxImg[i].setAttribute('alt',arrBg.arrAlt[i]);
}