function openInvitation() {
  const cover = document.querySelector(".cover");
  const invitation = document.getElementById("invitation");

  // Display the invitation content immediately
  invitation.style.display = "block";

  // Hide the cover smoothly
  setTimeout(() => {
    cover.style.transition =
      "transform 0.6s ease-in-out, opacity 0.6s ease-in-out";
    cover.style.transform = "translateY(-100%)";
    cover.style.opacity = "0";

    // Once the cover is out of view, hide it completely
    setTimeout(() => {
      cover.style.display = "none";
      invitation.classList.add("show");
      document.getElementById("bgMusic").play();
    }, 600); // Match the timeout to the CSS transition duration
  }, 100); // Slight delay to ensure invitation content is ready
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

document.addEventListener("DOMContentLoaded", () => {
  // Load wishes from local storage
  loadWishes();

  // Add event listener to the form
  document.getElementById("wishForm").addEventListener("submit", submitWish);
});

function submitWish(event) {
  // Prevent form submission and page reload
  event.preventDefault();

  // Get input values
  const name = document.getElementById("nameInput").value;
  const wish = document.getElementById("wishInput").value;

  // Check if fields are not empty
  if (name && wish) {
    // Create a new wish object
    const newWish = { name, wish };

    // Get existing wishes from local storage
    const wishes = JSON.parse(localStorage.getItem("wishes")) || [];

    // Add the new wish to the array
    wishes.push(newWish);

    // Save updated wishes to local storage
    localStorage.setItem("wishes", JSON.stringify(wishes));

    // Display the new wish
    displayWish(newWish);

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("wishInput").value = "";
  }
}

function loadWishes() {
  // Get existing wishes from local storage
  const wishes = JSON.parse(localStorage.getItem("wishes")) || [];

  // Display each wish
  wishes.forEach((wish) => displayWish(wish));
}

function displayWish(wish) {
  // Create a new wish element
  const wishElement = document.createElement("div");
  wishElement.className = "wish-item";
  wishElement.innerHTML = `<p class="name">${wish.name}</p><p>${wish.wish}</p>`;

  // Append new wish to the list
  document.getElementById("wishes").appendChild(wishElement);
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
