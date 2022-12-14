//RESUME LINKS
const app = {
    headerResumeDiv: document.querySelector('.header__resume'),
    contactResumeDiv: document.querySelector('.contact__resume'),
    navItem: document.querySelector('.header__nav'),
    navListItems: ['homeNav','experienceNav','aboutNav','contactNav'],

    init() {
        app.addEvents();
        app.sectionScrollAnimation();
        app.aboutSectionTypewriterEffect();
    },

    addEvents() {
        //Hide or show header resume links
        app.headerResumeDiv.addEventListener('mouseover', app.showResumeLinks);
        app.headerResumeDiv.addEventListener('mouseout', app.hideResumeLinks);

        //Hide or show contact resume links
        app.contactResumeDiv.addEventListener('mouseover', app.showResumeLinks);
        app.contactResumeDiv.addEventListener('mouseout', app.hideResumeLinks);

        //Color effect on header nav links
        app.navItem.addEventListener('mouseover', app.navStyleOnOver);
        app.navItem.addEventListener('mouseout', app.navStyleOnOut);
    },
    
    showResumeLinks(event) {
        app.headerOrContactResume(event.target).classList.remove('resume-links');
    },

    hideResumeLinks(event) {
        app.headerOrContactResume(event.target).classList.add('resume-links');
    },

    headerOrContactResume(target) {
        if(target.classList.contains('header__resume')){
            return document.querySelector('#header__resume');
        } else {
            return document.querySelector('#contact__resume');
        }
    },

    navStyleOnOver(event) {
        let navListItems = [...app.navListItems];
        const target = event.target.id;
        const targetIndex = navListItems.indexOf(target);
        navListItems.splice(targetIndex,1);
        app.applyStyleToNav(navListItems,'rgba(229, 221, 203,0.5)');
    },
    
    navStyleOnOut() {
        app.applyStyleToNav(app.navListItems,'rgba(229, 221, 203)');
    },

    applyStyleToNav(array,color) {
        for(const item of array){
            const id = '#' + item;
            document.querySelector(id).style.color = color;
        }
    },

    sectionScrollAnimation() {
        let scrollAnimationHidden = document.querySelectorAll('.scrollAnimation--hidden');
        scrollAnimationHidden.forEach((el) => app.fadeInObserver.observe(el));
    },

    aboutSectionTypewriterEffect() {
        let typewriterEffectElement = document.querySelector('.typewriter-effect');
        app.typewriterObserver.observe(typewriterEffectElement);
    },

    fadeInObserver: new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrollAnimation--show');
            } else {
                entry.target.classList.remove('scrollAnimation--show');
            }
        });
    }),

    typewriterObserver: new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('typewriter-effect--on');
                setTimeout(function(){ entry.target.classList.remove('typewriter-effect--on') }, 4500);
            }
        });
    }),
    
}

app.init();

// .section__link--active
