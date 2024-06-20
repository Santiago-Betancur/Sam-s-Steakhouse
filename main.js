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


