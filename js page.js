$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Undergraduate ", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        smartBackspace: false
    });


    //about tabs

    const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) => {
        tab.addEventListener('click',() => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('tab-active');
            });

            target.classList.add('tab-active');

            tabs.forEach((tab) => {
                tab.classList.remove('tab-active');
            });

            tab.classList.add('tab-active');
        });
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    let mixerPortfolio = mixitup('.works-container', {
        selectors: {
            target: '.works-card'
        },
        animation: {
            duration: 300
        }
    });

    const linkWork = document.querySelectorAll('.works-item')

    function activeWork() {
        linkWork.forEach(l => l.classList.remove('active-works'))
        this.classList.add('active-works')
    }

    linkWork.forEach(l=> l.addEventListener("click",activeWork))

    // work popup
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("works-button")){
            togglePortfolioPopup();
            portfolioItemDetails(e.target.parentElement);
        }
    })

    function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
    }

    document.querySelector(".portfolio-popup-close").addEventListener("click",togglePortfolioPopup)

    function portfolioItemDetails(portfolioItem){
        document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".works-img").src;
        document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".works-title").innerHTML;
        document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".Portfolio-item-details").innerHTML;
    }

    // send email

});



