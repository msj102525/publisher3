"use strict";

const menu = document.querySelector("#menuBtn");
const gnb = document.querySelector(".gnb");
const wrap = document.querySelector("#wrap");
const headerP = document.querySelector("header .left-menu");

// header
menu.addEventListener("click", (e) => {
    // console.log(e.target);
    gnb.classList.add("gnbOn");
});
gnb.addEventListener("click", (e) => {
    if (e.target == gnb) {
        gnb.classList.remove("gnbOn");
    }
});

window.addEventListener("scroll", () => {
    const winScrollT = window.scrollY;
    // console.log(winScrollT);
    if (winScrollT > 0) {
        headerP.classList.add("headerS");
    }else {
        headerP.classList.remove("headerS");        
    }
});

// footer

const langBox = document.querySelector(".lang-box");
const langBoxUl = document.querySelector("ul.fsub");

langBox.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    if (e.currentTarget == langBox) {
        langBoxUl.classList.toggle("fulSubOn");
    }
});