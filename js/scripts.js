//Typing Text
const textArray = ["Bit by Bit - Byte by Byte"]; // Text with copyright symbol
const typingSpeed = 100;
const deletingSpeed = 100;
const pauseBetween = 1000;

let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const displayText = textArray[0].substring(0, charIndex);
  document.getElementById("typing").textContent = displayText;

  if (!isDeleting && charIndex < textArray[0].length) {
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, deletingSpeed);
  } else if (charIndex === 0 && isDeleting) {
    isDeleting = false;
    setTimeout(typeEffect, typingSpeed);
  } else if (charIndex === textArray[0].length) {
    isDeleting = true;
    setTimeout(typeEffect, pauseBetween);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeEffect, typingSpeed);
});

//Page Transitions
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  // Handle link clicks for fade-out
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Add fade-out effect
      document.body.classList.add("page-transition-exit");

      setTimeout(() => {
        // Redirect to the new page after the fade-out effect
        window.location.href = link.href;
      }, 300); // Match the fade-out duration
    });
  });

  // Fade-in effect for the new page
  document.body.classList.add("page-transition-enter");
  setTimeout(() => {
    document.body.classList.add("page-transition-enter-active");
  }, 0); // Add fade-in effect on page load
});
