/* ============================================================
   Michael Busch — Portfolio JavaScript
   Four small features, each in its own labeled block:
   1. Dark mode toggle (remembers your choice)
   2. Photography slideshow
   3. Callback modal (open / close / validate)
   4. Scroll-reveal animation
   ============================================================ */

/* ---------- 1. DARK MODE TOGGLE ---------- */

// Runs once when the page loads: restore the saved theme, if any.
(function restoreTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeIcon();
  }
})();

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Save the choice so it sticks between visits
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  // Moon = "switch to dark", sun = "switch to light"
  icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

/* ---------- 2. SLIDESHOW ---------- */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  if (slides.length === 0) return; // nothing to do if no slides exist

  slides[currentSlide].classList.remove("active");
  // The % (remainder) wraps back to 0 after the last slide
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Change slides every 4.5 seconds
if (slides.length > 1) {
  setInterval(nextSlide, 4500);
}

/* ---------- 3. CALLBACK MODAL ---------- */

function openModal() {
  const modal = document.getElementById("popupModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("popupModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// Also close the modal when the Escape key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Basic check that the phone number looks like a phone number.
// Returning false stops the form from submitting.
function validatePhoneForm() {
  const phoneInput = document.getElementById("phone-number");
  const digitsOnly = phoneInput.value.replace(/\D/g, ""); // strip non-digits

  if (digitsOnly.length < 10) {
    alert("Please enter a valid 10-digit phone number.");
    phoneInput.focus();
    return false;
  }
  return true;
}

/* ---------- 4. SCROLL REVEAL ---------- */

// IntersectionObserver watches elements and tells us when they
// scroll into view. We then add .visible, which CSS animates.
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once, then stop watching
      }
    });
  },
  { threshold: 0.15 } // fire when 15% of the element is visible
);

revealElements.forEach(function (el) {
  observer.observe(el);
});