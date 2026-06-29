document.addEventListener("DOMContentLoaded", () => {



/* ======================
THEME
====================== */


const themeBtn =
document.getElementById("theme-toggle");


const savedTheme =
localStorage.getItem("theme");



if(savedTheme === "dark"){


document.body.setAttribute(
"data-theme",
"dark"
);


if(themeBtn){

themeBtn.textContent="☀️";

}

}




if(themeBtn){


themeBtn.addEventListener(
"click",
()=>{


const dark =
document.body.getAttribute(
"data-theme"
)==="dark";



if(dark){


document.body.removeAttribute(
"data-theme"
);


localStorage.setItem(
"theme",
"light"
);


themeBtn.textContent="🌙";


}else{


document.body.setAttribute(
"data-theme",
"dark"
);


localStorage.setItem(
"theme",
"dark"
);


themeBtn.textContent="☀️";


}


});


}







/* ======================
PROGRESS + TOP BUTTON
====================== */


const progress =
document.getElementById(
"progress-bar"
);


const topBtn =
document.getElementById(
"backToTop"
);





window.addEventListener(
"scroll",
()=>{


const scroll =
window.scrollY;


const height =
document.body.scrollHeight -
window.innerHeight;



const percent =
height > 0
?
(scroll / height) * 100
:
0;



if(progress){

progress.style.width =
percent + "%";

}




if(topBtn){


topBtn.style.display =
scroll > 400
?
"block"
:
"none";


}




reveal();



});







if(topBtn){


topBtn.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}







/* ======================
FAQ
====================== */


const faqItems =
document.querySelectorAll(
".faq-item"
);



faqItems.forEach(item=>{


item.addEventListener(
"click",
()=>{


item.classList.toggle(
"active"
);



const icon =
item.querySelector(
"span"
);



if(icon){


icon.textContent =
item.classList.contains(
"active"
)

?
"−"

:
"+";


}



});


});







/* ======================
REVEAL
====================== */


function reveal(){


const elements =
document.querySelectorAll(
".reveal"
);



elements.forEach(el=>{


const position =
el.getBoundingClientRect()
.top;



if(position <
window.innerHeight - 100){


el.classList.add(
"active"
);


}



});


}





reveal();






/* ======================
FORM

FORMspree оставлен
без изменений

====================== */


const form =
document.querySelector(
".problem-form"
);



if(form){


form.addEventListener(
"submit",
()=>{


const button =
form.querySelector(
".btn-submit"
);



if(button){


button.textContent =
"Отправка...";


}



});


}





});