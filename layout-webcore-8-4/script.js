let swiper;

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

initSwiper();
window.addEventListener('resize', initSwiper);

const services = document.querySelector('.services');
const toggleButton = document.querySelector('.services-toggle');
const toggleButtonText = document.querySelector('.service-toggle__text');

if (toggleButton && services && toggleButtonText) {
  toggleButton.addEventListener('click', function () {
    services.classList.toggle('services--expanded');

    if (services.classList.contains('services--expanded')) {
      toggleButtonText.textContent = 'Скрыть';
    } else {
      toggleButtonText.textContent = 'Показать все';
    }
  });
}