class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);

        this.activeClass = "ativo";

        this.handleClick = this.handleClick.bind(this);
        this.desativeNavbar = this.desativeNavbar.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation ? 
            (link.style.animation = "") : 
            (link.style.animation = 'navLinkFade 0.5s ease-out forwards 0.2s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    desativeNavbar(){
        this.mobileMenu.classList.remove(this.activeClass);
        this.navList.classList.remove(this.activeClass);        
    }
}