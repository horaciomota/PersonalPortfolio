// Get references to the body and the sessions
const body = document.body;
const session1 = document.getElementById("session1");
const session2 = document.getElementById("session2");
const session3 = document.getElementById("session3");
const footer = document.getElementById("footer");

console.log(session1);

// Define the initial and final colors
const initialColor = "#CEE0DC";
const finalColorSession1 = "#B9CFD4";
const finalColorSession2 = "#FFF";
const finalColorFooter = "#f2c744";

// Define the scroll positions that will trigger the color changes
const scrollPositionSession1 = session1.offsetTop + session1.offsetHeight * 0.6;
const scrollPositionSession2 = session2.offsetTop + session2.offsetHeight * 0.3;
const scrollPositionSession3 = session3.offsetTop + session3.offsetHeight * 0.6;
const scrollPositionFooter = footer.offsetTop;

// Add an event listener for the scroll event on the window
window.addEventListener("scroll", function () {
  // Check if the scroll position of the footer has been reached or surpassed
  if (window.scrollY >= scrollPositionFooter) {
    // Set the body color to the final color of the footer with a 0.5 second transition
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = finalColorFooter;
  }
  // Check if the scroll position of session 3 has been reached or surpassed
  else if (window.scrollY >= scrollPositionSession3) {
    // Set the body color to the final color of session 2 with a 0.5 second transition
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = finalColorSession2;
  }
  // Check if the scroll position of session 2 has been reached or surpassed
  else if (window.scrollY >= scrollPositionSession2) {
    // Set the body color to the final color of session 2 with a 0.5 second transition
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = finalColorSession2;
  }
  // Otherwise, check if the scroll position of session 1 has been reached or surpassed
  else if (window.scrollY >= scrollPositionSession1) {
    // Set the body color to the final color of session 1 with a 0.5 second transition
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = finalColorSession1;
  } else {
    // Otherwise, set the body color to the initial color with a 0.5 second transition
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = initialColor;
  }
});
