function openInvitation() {
  document.getElementById("invitation").style.display = "block";
  document.querySelector(".cover").style.display = "none";
  document.getElementById("bgMusic").play();
  window.scrollTo(0, 0);
  animateSections();
}

function animateSections() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("visible");
    }, index * 200);
  });
}

//count

function countdownTimer() {
  const weddingDate = new Date("2024-09-30T00:00:00").getTime(); // Ensure to include time if needed
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown items
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Check if the countdown is over
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}

// Call the function to start the countdown
countdownTimer();

function addToCalendar() {
  // Implement Google Calendar integration
  alert("Calendar integration to be implemented");
}

function openMaps() {
  // Implement Google Maps integration
  alert("Google Maps integration to be implemented");
}

function showGiftInfo() {
  // Implement gift information display
  alert("Gift information to be implemented");
}

//wish

function submitWish() {
  // Prevent form submission and page reload
  event.preventDefault();

  // Get input values
  const name = document.getElementById("nameInput").value;
  const wish = document.getElementById("wishInput").value;

  // Check if fields are not empty
  if (name && wish) {
    // Create a new wish element
    const wishElement = document.createElement("div");
    wishElement.className = "wish-item";
    wishElement.innerHTML = `<p class="name">${name}</p><p>${wish}</p>`;

    // Append new wish to the list
    document.getElementById("wishes").appendChild(wishElement);

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("wishInput").value = "";
  }
}

// Attach event listener to form
document.getElementById("wishForm").addEventListener("submit", submitWish);

// paragraf
document.addEventListener("DOMContentLoaded", () => {
  const profiles = document.querySelectorAll(".profile, .couple-section");

  profiles.forEach((profile) => {
    profile.classList.add("visible");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const journeyDetails = document.querySelectorAll(".journey-details p");

  journeyDetails.forEach((p, index) => {
    setTimeout(() => {
      p.classList.add("show");
    }, index * 500); // Delay each paragraph by 500ms
  });
});

//scroll
document.addEventListener("DOMContentLoaded", () => {
  let isScrolling;

  // Handle smooth scrolling when the user scrolls manually
  document.querySelector(".container").addEventListener("scroll", function () {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      // Optional: Add additional behavior after scrolling stops
    }, 66);
  });

  // Optional: Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

//gift

function showGiftInfo() {
  document.getElementById("gift-info").style.display = "block";
}

function hideGiftInfo() {
  document.getElementById("gift-info").style.display = "none";
}
