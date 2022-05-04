const menu=document.querySelector('.menu');
const sidemenu=document.querySelector('.sidemenu');
const closesidemenu=document.querySelector('.close');

menu.addEventListener('click',(e)=>{
    sidemenu.classList.toggle('hide');
})
closesidemenu.addEventListener('click',(e)=>{
    sidemenu.classList.toggle('hide');
})