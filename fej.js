/*js para carrusel fe*/
document.addEventListener('DOMContentLoaded', function () {
  const carouselItems = document.querySelectorAll('.carouselF .item');
  const carouselContainer = document.querySelector('.carousel-containerF');
  let currentIndex = 0;
  const totalItems = carouselItems.length;

  function showItem(index) {
      carouselItems.forEach((item, i) => {
          if (i === index) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      });
  }

  function nextItem() {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
  }

  function previousItem() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showItem(currentIndex);
  }

  // Muestra el primer ítem inicialmente
  showItem(currentIndex);

  // Controla el intervalo para avanzar automáticamente el carrusel
  setInterval(nextItem, 5000); // Cambia de ítem cada 5 segundos

  // Control para avanzar manualmente al siguiente ítem
  carouselContainer.addEventListener('click', function (e) {
      const target = e.target;

      if (target.matches('.next')) {
          nextItem();
      } else if (target.matches('.prev')) {
          previousItem();
      }
  });
});

});*/
