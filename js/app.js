//RESUME LINKS
const app = {
    headerResumeDiv: document.querySelector('.header__resume'),
    contactResumeDiv: document.querySelector('.contact__resume'),
    navItem: document.querySelector('.header__nav'),
    navListItems: ['homeNav','experienceNav','aboutNav','contactNav'],
    typewriterEffectElements: document.querySelectorAll('.typewriter-effect'),

    init() {
        app.addEvents();
        app.timeOutTypewriterEffect();
    
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

    timeOutTypewriterEffect() {
        //Elem 1
        app.stylesTypewriterEffectOn(app.typewriterEffectElements[0], 2);
        setTimeout(function() {app.stylesTypewriterEffectOff(app.typewriterEffectElements[0])}, 3000);

        setTimeout(function(){app.sectionAboutEffects()}, 3000);
    },

    sectionAboutEffects() {
        app.sectionSubtitleEffectOn(document.querySelector('.section__subtitle--occupation'));

        document.querySelector('.section__subtitle--occupation').addEventListener('animationend', function() {
            app.sectionSubtitleEffectOn(document.querySelector('.section__subtitle--details'));
        });
    },
    
    stylesTypewriterEffectOn(elem, duration) {
        elem.style.animation = `typing ${duration}s steps(30, end), blink-caret .5s step-end infinite`;
        elem.style.borderRight = '.15em solid orange';
        elem.style.display = 'block';
    },

    sectionSubtitleEffectOn(elem) {
        elem.style.animation = 'fade-in 2s ease-in forwards';
    },

    stylesTypewriterEffectOff(elem) {
        elem.style.animation = 'none';
        elem.style.borderRight = 'none';
    },

    // $(window).on('scroll', function() {
    //     if($(window).scrollTop() >= $('.div').offset().top + $('.div').outerHeight() - window.innerHeight) {
    //       alert('Bottom');
    //     }
    //   });
    
}

app.init();

// .section__link--active

//faire truc menu qui passe en gris l'actuel sections
//truc scroll pour s'amuser
