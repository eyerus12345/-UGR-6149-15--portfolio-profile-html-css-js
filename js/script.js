document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown button");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation(); 
    dropdownContent.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      dropdownContent.classList.remove("show");
    }
  });

  
  dropdownContent.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const url = event.target.getAttribute("href");
      window.location.href = url; 
    }
  });

  
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  });
});document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("input[type='text']:nth-of-type(1)");
  const emailInput = form.querySelector("input[type='text']:nth-of-type(2)");
  const messageInput = form.querySelector("textarea");

  const showMessage = (message, bgColor, textColor) => {
    
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    Object.assign(messageBox.style, {
      position: "fixed",
      bottom: "20px", 
      left: "70%", 
      transform: "translateX(-50%)",
      zIndex: "1000",
      backgroundColor: bgColor,
      color: textColor,
      padding: "10px 20px",
      borderRadius: "15px",
      fontSize: "14px",
      fontWeight: "bold",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      animation: "fade-out 3s forwards",
    });

    
    document.body.appendChild(messageBox);

    setTimeout(() => {
      document.body.removeChild(messageBox);
    }, 3000);
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && message) {
      
      showMessage("❤️ Thank you! Your message is sent!", "#8bc34a", "#ffffff");
      form.reset();
    } else {
      
      showMessage(
        "⚠️ Please fill all fields correctly, dear!",
        "#ff5722",
        "#ffffff"
      );
    }
  });
});
