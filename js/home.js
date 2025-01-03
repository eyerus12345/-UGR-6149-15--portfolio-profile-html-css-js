document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main > article");
  let currentSection = 0;
  let isScrolling = false;

  // Full-page scrolling behavior
  const scrollToSection = (index) => {
    if (isScrolling) return;
    isScrolling = true;

    sections[index].scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Prevent excessive scrolling
  };

  window.addEventListener("wheel", (e) => {
    if (isScrolling) return;
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      scrollToSection(++currentSection);
    } else if (e.deltaY < 0 && currentSection > 0) {
      scrollToSection(--currentSection);
    }
  });

  // Add animation styles to sections
  sections.forEach((section) => {
    section.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    section.style.transform = "scale(0.9)";
    section.style.opacity = "0.1";
  });

  // Update section styles on scroll
  const updateActiveSection = () => {
    sections.forEach((section, index) => {
      if (index === currentSection) {
        section.style.transform = "scale(1)";
        section.style.opacity = "1";
      } else {
        section.style.transform = "scale(0.9)";
        section.style.opacity = "0.1";
      }
    });
  };

  window.addEventListener("scroll", updateActiveSection);

  // Initial activation
  updateActiveSection();

  // Add a welcome message in the top-right corner
  const welcomeMessage = document.createElement("div");
  welcomeMessage.innerHTML =
    "Welcome to my portfolio! I am <strong>EYERUSALEM T/BRHAN</strong>";
  welcomeMessage.style.position = "fixed";
  welcomeMessage.style.top = "10px";
  welcomeMessage.style.right = "10px";
  welcomeMessage.style.backgroundColor = "lightblue";
  welcomeMessage.style.color = "black";
  welcomeMessage.style.fontFamily = "'Judson', serif";
  welcomeMessage.style.fontStyle = "italic";
  welcomeMessage.style.padding = "10px 20px";
  welcomeMessage.style.borderRadius = "8px";
  welcomeMessage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  welcomeMessage.style.zIndex = "1000";
  document.body.appendChild(welcomeMessage);
// Add hover event to welcome message
welcomeMessage.addEventListener("mouseover", () => {
    welcomeMessage.style.opacity = "0";
    setTimeout(() => welcomeMessage.remove(), 300);
});

// Automatically remove welcome message after 2 seconds
setTimeout(() => {
    welcomeMessage.style.opacity = "0";
    setTimeout(() => welcomeMessage.remove(), 300);
}, 5000);

  // Form submission handling
  const form = document.querySelector("form");
  const nameInput = form.querySelector('input[type="text"]:nth-child(2)');
  const emailInput = form.querySelector('input[type="text"]:nth-child(5)');
  const messageInput = form.querySelector("textarea");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const showMessage = (text, isSuccess) => {
      const alertBox = document.createElement("div");
      alertBox.innerHTML = `<i class="fa fa-heart" style="color:red; margin-right: 5px;"></i>${text}`;
      alertBox.style.position = "fixed";
      alertBox.style.bottom = "20px";
      alertBox.style.right = "20px";
      alertBox.style.backgroundColor = isSuccess ? "lightblue" : "pink";
      alertBox.style.color = "black";
      alertBox.style.fontFamily = "'Judson', serif";
      alertBox.style.fontStyle = "italic";
      alertBox.style.padding = "10px 20px";
      alertBox.style.borderRadius = "8px";
      alertBox.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      alertBox.style.transition = "opacity 0.3s ease";
      document.body.appendChild(alertBox);

      setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => alertBox.remove(), 300);
      }, 2000);
    };

    if (name && email && message) {
      // Show success message
      showMessage("Thank you! ❤", true);
      form.reset();
    } else {
      // Show error message
      showMessage("Please fill the form correctly!", false);
    }
  });
});
