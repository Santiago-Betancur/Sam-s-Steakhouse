$(document).ready(function() {
    $('#hamburger').click(function() {
        $('#mobile-menu').slideToggle();
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".menu-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const target = tab.getAttribute("data-target");

      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      
      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all content sections
      contents.forEach(content => content.classList.remove("active"));

      // Show the targeted content section
      document.getElementById(target).classList.add("active");
    });
  });
});
$(document).ready(function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = $(".slides");
    let dots = $(".dot");
    slides.hide();

    let currentSlide = slides.eq(slideIndex - 1);

    currentSlide.fadeOut(500, function() {
      currentSlide.css("z-index", "1");
    });

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    let nextSlide = slides.eq(slideIndex - 1);

    nextSlide.css("z-index", "2");
    nextSlide.fadeIn(500);

    dots.removeClass("active");
    dots.eq(slideIndex - 1).addClass("active");

    setTimeout(showSlides, 4000); // Change image every 5 seconds
  }
});


