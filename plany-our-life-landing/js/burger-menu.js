let iconBurger = document.querySelector('header .hf-burger__icon-body');
if(iconBurger){
    iconBurger.addEventListener("click", function (e){
        document.querySelector('header .hf-burger__icon').classList.toggle('active');
        document.querySelector('body').classList.toggle('closescroll');
        document.querySelector('header .hf-menu').classList.toggle('active');
        document.querySelector('header .hf-content-social').classList.toggle('active');
        document.querySelector('header .hf-button').classList.toggle('active');
        document.querySelector('header .hf-logo').classList.toggle('active');
        document.querySelector('header .hf-body').classList.toggle('active');
    })
}

