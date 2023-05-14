var x = document.getElementById("about");
var btn1 = document.getElementById("btn1");

var y = document.getElementById("about");
var btn2 = document.getElementById("btn2");

var z = document.getElementById("experience");
var btn3 = document.getElementById("btn3");

var w = document.getElementById("work");
var btn4 = document.getElementById("btn4");

var k = document.getElementById("contact");
var btn5 = document.getElementById("btn5");

var topBtn = document.getElementById("topBtn");

window.onscroll = function (){
    if(window.scrollY >= y.offsetTop - 74.4){
        topBtn.style.display = "block";
    }else if (window.scrollY < y.offsetTop){
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior : 'smooth'
    });
}

btn1.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior : 'smooth'
    });
}

btn2.onclick = function (){
    window.scrollTo({
        top: y.offsetTop - 74.4,
        behavior : 'smooth'
    });
}

btn3.onclick = function (){
    window.scrollTo({
        top: z.offsetTop - 74.4,
        behavior : 'smooth'
    });
}

btn4.onclick = function (){
    window.scrollTo({
        top: w.offsetTop - 74.4,
        behavior : 'smooth'
    });
}

btn5.onclick = function (){
    window.scrollTo({
        top: k.offsetTop - 74.4,
        behavior : 'smooth'
    });
}