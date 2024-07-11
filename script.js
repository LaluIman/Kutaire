// navbar closing when press
const closeLinks = document.querySelectorAll('.close-nav');

closeLinks.forEach(link => {
    link.addEventListener('click', () => {
    const navbar = document.getElementById('navbar-default');
    navbar.classList.add('hidden');
    });
});


// scroll reveal
ScrollReveal({ 
    reset: true,
    distance:'75px',
    duration:1500,
    delay:50
 });

 ScrollReveal().reveal('.heroimg, .line, .grid1, .grid2, .grid3, .picture1, .picture2, .picture3, .picture4, .picture5' , { origin: 'bottom'});
 ScrollReveal().reveal('.aboutimg' , { origin: 'right'});


// make the image cannot be copied
 var isCtrl = false;
document.onkeyup=function(e)
{
if(e.which == 17)
isCtrl=false;
}
document.onkeydown=function(e)
{
if(e.which == 123)
isCtrl=true;
if (((e.which == 85) || (e.which == 65) || (e.which == 88) || (e.which == 67) || (e.which == 86) || (e.which == 2) || (e.which == 3) || (e.which == 123) || (e.which == 83)) && isCtrl == true)
{

return false;
}

//  make the website cant right clicked
// }
// // right click code
// var isNS = (navigator.appName == "Netscape") ? 1 : 0;
// if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
// function mischandler(){
    
// return false;
// }
// function mousehandler(e){
// var myevent = (isNS) ? e : event;
// var eventbutton = (isNS) ? myevent.which : myevent.button;
// if((eventbutton==2)||(eventbutton==3)) return false;
// }
// document.oncontextmenu = mischandler;
// document.onmousedown = mousehandler;
// document.onmouseup = mousehandler;
// //select content code disable  alok goyal
// function killCopy(e){
// return false
// }
// function reEnable(){
// return true
// }
// document.onselectstart=new Function ("return false")
// if (window.sidebar){
// document.onmousedown=killCopy
// document.onclick=reEnable
}