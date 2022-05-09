window.addEventListener('scroll',onScroll);

onScroll();
function onScroll(){
    showNavOnScroll();
    backToTopButtonOnScroll();
    activeMenuAtCurrentSection(home);
    activeMenuAtCurrentSection(services);
    activeMenuAtCurrentSection(about);
    activeMenuAtCurrentSection(contact);
}

function activeMenuAtCurrentSection(section){
    //linha alvo
    const targetLine = scrollY + innerHeight / 2;

    //to topo da seção
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active');
    if(sectionBoundaries){
        menuElement.classList.add('active');
    }
} 

function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll');
    }else{
        navigation.classList.remove('scroll');
    }
}

function backToTopButtonOnScroll(){
    if(scrollY > 700){
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 400,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .cards,
    #about,
    #about header,
    #about .content`);

function sayMyName(name){
    console.log(name)
}