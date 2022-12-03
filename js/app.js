const headerResumeDiv = document.querySelector('.header__resume');
const headerResumeLinks = document.querySelector('.header__resume-links');

const contactResumeDiv = document.querySelector('.contact__resume');
const contactResumeLinks = document.querySelector('.contact__resume-links');


function handleMouseOverHeader(event) {
    headerResumeLinks.style.display = 'inline-block';
}

function handleMouseOutHeader(event) {
    headerResumeLinks.style.display = 'none';
}

function handleMouseOverContact(event) {
    contactResumeLinks.style.display = 'inline-block';
}

function handleMouseOutContact(event) {
    contactResumeLinks.style.display = 'none';
}

headerResumeDiv.addEventListener('mouseover', handleMouseOverHeader);
headerResumeDiv.addEventListener('mouseout', handleMouseOutHeader);
contactResumeDiv.addEventListener('mouseover', handleMouseOverContact);
contactResumeDiv.addEventListener('mouseout', handleMouseOutContact);

//when finish hovering display:none;
//faire truc menu qui passe en gris l'actuel sections
//header : animation hover links comme tamalsen.dev
//truc scroll pour s'amuser
