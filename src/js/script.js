document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown button");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle dropdown content on button click
  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    dropdownContent.classList.toggle("show");
  });

  // Close dropdown if clicked outside
  window.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      dropdownContent.classList.remove("show");
    }
  });

  // Redirect to the selected page when a link is clicked
  dropdownContent.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const url = event.target.getAttribute("href");
      window.location.href = url; // Navigate to the selected page
    }
  });

  // Keyboard accessibility: Close dropdown on Esc key press
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  });
});
