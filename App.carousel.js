document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  let currentIndex = 0;

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function to show a specific item
  function showItem(index) {
    currentIndex = index;
    let offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    items.forEach((item, idx) => {
      dots[idx].classList.remove("active");
      if (idx === index) {
        dots[idx].classList.add("active");
      }
    });
  }

  // Event listeners for buttons
  document.querySelector(".btn_prev").addEventListener("click", () => {
    let newIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(newIndex);
  });

  document.querySelector(".btn_next").addEventListener("click", () => {
    let newIndex = (currentIndex + 1) % items.length;
    showItem(newIndex);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});
/*carousel pdf*/
document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel-pdf");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots2");

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("button");
    dot.classList.add("dot2");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot2");
  let currentItem = 0;
  let currentImg = 0;

  // Function to show a specific item
  function showItem(index) {
    items[currentItem].classList.remove("active2");
    items[index].classList.add("active2");
    dots[currentItem].classList.remove("active");
    dots[index].classList.add("active");
    currentItem = index;
    currentImg = 0;
    updateImages();
  }

  // Function to update images within the current item
  function updateImages() {
    let images = items[currentItem].querySelectorAll("img");
    images.forEach(img => img.classList.remove("show"));
    if (images[currentImg]) {
      images[currentImg].classList.add("show");
    }
  }

  // Event listeners for buttons
  document.querySelector(".btn2_prev").addEventListener("click", () => {
    let images = items[currentItem].querySelectorAll("img");
    currentImg--;
    if (currentImg < 0) {
      currentImg = images.length - 1;
      showItem((currentItem - 1 + items.length) % items.length);
    } else {
      updateImages();
    }
  });

  document.querySelector(".btn2_next").addEventListener("click", () => {
    let images = items[currentItem].querySelectorAll("img");
    currentImg++;
    if (currentImg >= images.length) {
      currentImg = 0;
      showItem((currentItem + 1) % items.length);
    } else {
      updateImages();
    }
  });

  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      showItem(parseInt(dot.dataset.index));
    });
  });

  // Initialize the first image visible
  updateImages();
});




