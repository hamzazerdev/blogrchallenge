let nav=document.getElementById('inner1');
let popup=document.getElementById('pop');
let arrow=document.getElementById('arrow');


let burger= document.getElementById('burger');
let lines=document.getElementsByClassName("line");
let popupmenu=document.getElementById('popupburger');

let connect=document.getElementById('connect');
connect.addEventListener('click',()=>{
document.getElementsByClassName("roll")[0].classList.toggle("roll-activated");
document.getElementById('arrow-connect').classList.toggle("arrow-connect-activated");
});

burger.addEventListener('click',()=>{
    lines[0].classList.toggle('top-b');
    lines[1].classList.toggle('mid-b');
    lines[2].classList.toggle('bot-b');
    popupmenu.classList.toggle("popmenu")
    setTimeout(() => { 
        document.getElementsByClassName("nav-burger")[0].classList.toggle("nav-burger1");
        document.getElementsByClassName("login-signup-burger")[0].classList.toggle("login-signup-burger1");
         }, 150);
         if(document.getElementsByClassName("roll")[0].classList.contains("roll-activated")){
             document.getElementsByClassName("roll")[0].classList.toggle("roll-activated");
         }
});


nav.addEventListener('click',()=>{
popup.classList.toggle('pop1');
setTimeout(() => { 
document.getElementsByClassName("apop")[0].classList.toggle("apop1");
document.getElementsByClassName("apop")[1].classList.toggle("apop1");
document.getElementsByClassName("apop")[2].classList.toggle("apop1");
 }, 350);
arrow.classList.toggle('arrow1');


});

