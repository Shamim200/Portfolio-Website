//Responsive navbar start

// navbar declear
const nav = document.querySelector(".navbar");
// toggle bar declear
const tog = document.querySelector(".navbar-toggle");
// add to event listener
tog.addEventListener("click", ()=>{
    nav.classList.toggle("show");
})

function myFunction(x){
	x.classList.toggle('fa-times')
}
//Responsive navbar End


// use type js
const typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: [
        'Fronend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Graphices Designer',
		'And Also',
        'Mern Stack Developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    loop: true

  });

// To top button

const toTop = document.querySelector(".totop");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 100) {
        toTop.classList.add("toup");
    } else {
        toTop.classList.remove("toup");
        
    }
})
