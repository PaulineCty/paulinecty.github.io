//RESUME LINKS

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


//NAV LINKS 

const navItems = document.querySelectorAll('.header__nav-item');

function handleMouseOverNav(event) {
    let navList = ['homeNav','experienceNav','aboutNav','contactNav']; //not nice, would be great to get them differently
    const target = event.target.id;
    const targetIndex = navList.indexOf(target);
    navList.splice(targetIndex,1);
    for(let i=0 ; i<navList.length ; i++){
        navList[i] = '#' + navList[i];
        document.querySelector(navList[i]).style.color = 'rgba(229, 221, 203,0.5)';
    }
}

function handleMouseOutNav(event) {
    let navList = ['homeNav','experienceNav','aboutNav','contactNav']; //not nice, would be great to get them differently
    for(let i=0 ; i<navList.length ; i++){
        navList[i] = '#' + navList[i];
        document.querySelector(navList[i]).style.color = 'rgba(229, 221, 203)';
    }
}

for(let i=0 ; i<navItems.length ; i++) {
    navItems[i].addEventListener('mouseover', handleMouseOverNav);
    navItems[i].addEventListener('mouseout', handleMouseOutNav);
}


//faire truc menu qui passe en gris l'actuel sections
//truc scroll pour s'amuser
