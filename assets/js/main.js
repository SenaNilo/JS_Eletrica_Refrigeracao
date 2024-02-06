document.addEventListener('DOMContentLoaded', init);

function init(){
    let query = window.matchMedia("(max-width: 950px)");

    if(query.matches){
        //Quando a tela for ate 950
        let query2 = window.matchMedia("(max-width: 660px)");

        if(query2.matches){            
            var swiper = new Swiper(".box-content", {
                slidesPerView: 2,
                spaceBetween: 20,
                freeMode: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

            /* menu mobile 
                quando apertar em algum link, fechar a navbar =}
            */
            const mobileNavbar = new MobileNavbar(
                ".menu-mobile",
                ".nav-list",
                ".nav-list li",
            );            
            mobileNavbar.mobileMenu.addEventListener("click", mobileNavbar.handleClick);
            //console.log(mobileNavbar.navLinks.length) = 5
            //Adicionar eventListener para todos os links da nav
            for (let i = 0; i < 5; i++){
                mobileNavbar.navLinks[i].addEventListener("click", mobileNavbar.desativeNavbar);
                mobileNavbar.navLinks[i].addEventListener("click", backHeader);
            }
        }else{   
            var swiper = new Swiper(".box-content", {
                slidesPerView: 3,
                spaceBetween: 20,
                freeMode: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
        
    }else{
        //Quando - -- for maior que 950
        var swiper = new Swiper(".box-content", {
            slidesPerView: 4,
            spaceBetween: 20,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: false,
            },
        });
    }
}

function backHeader(){
    const header = document.querySelector("header");
    if(header.className == "ativo"){
        header.classList.remove("ativo");
    }else{
        header.classList.add("ativo");
    }
}