const menu = document.querySelector('.menu');
const sidemenu = document.querySelector('.sidemenu');
const closesidemenu = document.querySelector('.close');
const featureList = document.querySelector('aside .featurelist');
const companyList = document.querySelector('aside .companylist');
const featureheading = document.querySelector('aside .featureheading');
const companyheading = document.querySelector('aside .companyheading');






let companyup = false;
let featureup = false;

menu.addEventListener('click', (e) => {
    sidemenu.classList.toggle('hide');
    sidemenu.style.boxShadow = '0 0 0 10000px rgba(0,0,0,0.75)';

});
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
    featureList.classList.add('hide');
    featureheading.lastElementChild.src = "./images/icon-arrow-down.svg";

    companyheading.lastElementChild.src = "./images/icon-arrow-down.svg";
    companyup = false;
    featureup = false;
    companyList.classList.add('hide');

});


