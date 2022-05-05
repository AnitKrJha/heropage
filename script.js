const menu = document.querySelector('.menu');
const sidemenu = document.querySelector('.sidemenu');
const closesidemenu = document.querySelector('.close');
const featureList = document.querySelector('.featurelist');
const companyList = document.querySelector('.companylist');
const featureheading = document.querySelector('.featureheading');
const companyheading = document.querySelector('.companyheading');

var companyup = false;
var featureup = false;
menu.addEventListener('click', (e) => {
    sidemenu.classList.toggle('hide');
})
console.dir(companyheading);
featureheading.addEventListener('click', (e) => {
    featureList.classList.toggle('hide');
    featureup = !featureup;
    if (featureup)
        featureheading.lastElementChild.src = "./images/icon-arrow-up.svg";
    else
        featureheading.lastElementChild.src = "./images/icon-arrow-down.svg";
});
companyheading.addEventListener('click', (e) => {
    companyList.classList.toggle('hide');
    companyup = !companyup;
    if (companyup)
        companyheading.lastElementChild.src = "./images/icon-arrow-up.svg";
    else
        companyheading.lastElementChild.src = "./images/icon-arrow-down.svg";
});
closesidemenu.addEventListener('click', (e) => {
    sidemenu.classList.toggle('hide');
})
console.dir(featureheading)