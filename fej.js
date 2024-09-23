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



/*carousel pdf

document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel-pdf");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
  
    // Insert dots into the DOM
    items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot); // Corrección: dotsContainer.appendChild(dot);
    });
  
    let dots = document.querySelectorAll(".dot");
  
    // Function to show a specific item
    function showItem(index) {
      items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
          item.classList.add("active");
          dots[idx].classList.add("active");
        }
      });
    }
  
    // Event listeners for buttons
    document.querySelector(".up").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".down").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    });
  
    // Event listeners for dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showItem(index);
      });
    });
  });*/

  /*Codigo para zoom --inabilitado*/
  /*document.addEventListener('DOMContentLoaded', function() {
    const zoomImgs = document.querySelectorAll('.zoom-img');

    zoomImgs.forEach(img => {
        img.addEventListener('click', function() {
            const src = this.getAttribute('src');
            const zoomedWindow = window.open("", "zoomedImage", "width=600,height=600");
            zoomedWindow.document.write(`<img src="${src}" style="width:100%; height:auto;">`);
        });
    });
});*/