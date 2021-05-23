function navOpen(){
  let hamburger = document.querySelector('#hamburger');
  let nav = document.querySelector('#nav');
  hamburger.onclick=function(){
    hamburger.classList.toggle('hamburger_active');
    nav.classList.toggle('nav_active');
  }
  let navLinks = document.querySelectorAll('#nav a');
  navLinks.forEach(function(navLink){
    navLink.onclick = function(){
      hamburger.classList.remove('hamburger_active');
      nav.classList.remove('nav_active');
    }
  })
}
navOpen();
new Swiper('.swiper-container',{
  navigation: { //добовляем стрелки
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: { //добовляем булиты
    el: '.swiper-pagination', //добовляем елемент
    type: 'bullets', //добовляем тип 
    clickable: true, //добовляем нажатие
    dynamicBullets: true, //добовляем трансформацию булитов
  },
  spaceBetween: 30,
  loop: true,
  autoplay: {// 
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 1500,
  // effect: 'fade'
  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: true,
  //   limitRotation: true,
  // },
  // effect: 'cube',
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 10,
  //   stretch: 50,
  //   slideShadows: true,
  // },
  effect: 'fade',
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
  }
});
