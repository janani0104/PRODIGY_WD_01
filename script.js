function changeNavOnScroll() {
    var nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'navy'; 
    } else {
        nav.style.backgroundColor = 'black';
    }
}

function addHover(e) {
    e.target.classList.add("hover-item");
}

function removeHover(e) {
    e.target.classList.remove("hover-item");
}

window.addEventListener('scroll', changeNavOnScroll);

var navigationLinks = document.querySelectorAll("#main-nav a");
navigationLinks.forEach(function(link) {
    link.addEventListener("mouseover", addHover);
    link.addEventListener("mouseout", removeHover);
});