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