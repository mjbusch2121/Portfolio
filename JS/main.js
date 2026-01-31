// Function to validate the phone callback form
function validatePhoneForm() {
  // Get the values from each form field
  var name = document.getElementById("phone-name").value;
  var phone = document.getElementById("phone-number").value;
  var callTime = document.getElementById("call-time").value;

  // Check if name field is empty
  if (name === "" || name === null) {
    alert("Please enter your name before submitting.");
    return false; // Prevents form submission
  }

  // Check if phone number field is empty
  if (phone === "" || phone === null) {
    alert("Please enter your phone number before submitting.");
    return false; // Prevents form submission
  }

  // Check if a call time was selected
  if (callTime === "" || callTime === null) {
    alert("Please select your preferred call time before submitting.");
    return false; // Prevents form submission
  }

  // If all fields are filled, show success message
  alert(
    "Thank you! We'll call you back during your preferred time: " +
      callTime,
  );
  return true; // Allows form submission
}
// POPUP MODAL FUNCTIONS

// Function to open the modal
function openModal() {
  document.getElementById("popupModal").style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Function to close the modal
function closeModal() {
  document.getElementById("popupModal").style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Function to handle popup form submission with validation
function handlePopupSubmit() {
  var name = document.getElementById("popup-name").value;
  var email = document.getElementById("popup-email").value;
  var message = document.getElementById("popup-message").value;

  // Validate name field
  if (name === "" || name === null) {
    alert("Please enter your name.");
    return false;
  }

  // Validate email field
  if (email === "" || email === null) {
    alert("Please enter your email.");
    return false;
  }

  // Validate message field
  if (message === "" || message === null) {
    alert("Please enter a message.");
    return false;
  }

  // Success message and close modal
  alert("Thank you " + name + "! Your message has been sent.");
  closeModal();
  return true;
}

// Close modal when clicking outside the content box
window.onclick = function (event) {
  var modal = document.getElementById("popupModal");
  if (event.target == modal) {
    closeModal();
  }
};
// SLIDESHOW FUNCTIONALITY
let currentSlide = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = 4;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add("active");
}

window.addEventListener("load", function () {
  setInterval(showNextSlide, 5000);
});
