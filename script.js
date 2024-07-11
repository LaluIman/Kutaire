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