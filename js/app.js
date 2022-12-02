const headerResumeTitle = document.querySelector('.header__resume-title');
const headerResumeLinks = document.querySelectorAll('.header__resume-link');
console.log(headerResumeLinks);

function handleMouseOver(event) {
    for(let i=0 ; i<headerResumeLinks.length ; i++){
        headerResumeLinks[i].style.display = 'inline-block';
    }
}


headerResumeTitle.addEventListener('mouseover', handleMouseOver);

//when finish hovering display:none;
//faire truc menu qui passe en gris l'actuel sections
//header : animation hover links comme tamalsen.dev
//truc scroll pour s'amuser
