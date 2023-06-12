const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 20){
        nav.classList.add('scroll-header');
        
    }else{
        nav.classList.remove('scroll-header');
       
    }
    
}

window.addEventListener('scroll', scrollHeader)

// skills detail
const skillsDetailViews = document.querySelectorAll('.skills_detail');
const skillsDetailBtns = document.querySelectorAll('.skills_content-button');
const skillsDetailCloses = document.querySelectorAll('.skills_detail-close');

let skillsDetail  = function(detailClick){
    skillsDetailViews[detailClick].classList.add('active_skills-detail');
}

skillsDetailBtns.forEach((skillsDetailBtn, i ) => {
    skillsDetailBtn.addEventListener('click', () => {
        skillsDetail(i);
    });
});

skillsDetailCloses.forEach((skillsDetailClose) => {
    skillsDetailClose.addEventListener('click', () => {
        skillsDetailViews.forEach((skillsDetailView) => {
            skillsDetailView.classList.remove('active_skills-detail');
        });
    });
});

