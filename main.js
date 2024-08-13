// MORE button
document.addEventListener("DOMContentLoaded", () => {
  const moreBtn = document.getElementById("moreBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  moreBtn.addEventListener("click", () => {
    // Toggle the display property of the popup
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("scroll", function () {
  var fixedFotograf = document.getElementById("fixedFotograf");
  var innen = document.getElementById("innen");
  var innenPosition = innen.getBoundingClientRect().bottom;
  var fixedFotografHeight = fixedFotograf.offsetHeight;

  if (innenPosition <= fixedFotografHeight + 50) {
    fixedFotograf.classList.remove("fixed");
    fixedFotograf.style.position = "absolute";
    fixedFotograf.style.top =
      window.scrollY + innenPosition - fixedFotografHeight - 49 + "px";
  } else {
    fixedFotograf.classList.add("fixed");
    fixedFotograf.style.position = "fixed";
    fixedFotograf.style.top = "0";
  }
});

const prevButton = document.querySelector(".carousel__prev");
const nextButton = document.querySelector(".carousel__next");
const viewport = document.querySelector(".carousel__viewport");
const slides = document.querySelectorAll(".carousel__slide");

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  viewport.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});

// Landingpage einfärbung Text
document.addEventListener("DOMContentLoaded", function () {
  function highlightWords(elementId, wordsToHighlight, highlightColor) {
    var content = document.getElementById(elementId);
    if (content) {
      var text = content.innerHTML;
      wordsToHighlight.forEach(function (word) {
        var regex = new RegExp(`(${word})`, "gi");
        text = text.replace(
          regex,
          `<span style="color: ${highlightColor};">$1</span>`
        );
      });
      content.innerHTML = text;
    }
  }

  var wordsToHighlight = [
    "Frauen",
    "fotografierte",
    "fotografiert",
    "Fotografien",
    "Fotografinnen",
    "Fotografin",
    "Frau",
    "bilder",
    "Körper",
  ];

  highlightWords("landingcontent", wordsToHighlight, "#ffe500");
  highlightWords("WARD81text", wordsToHighlight, "#ffe500");
  highlightWords("StreetwiseText", wordsToHighlight, "#ffe500");
  highlightWords("TwinsText", wordsToHighlight, "#ffe500");
  highlightWords("helenaalmeidazitat", wordsToHighlight, "#01348f");
});

document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover");
  const popup = document.getElementById("popup2");

  cover.addEventListener("mouseover", () => {
    // Toggle the display property of the popup
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  });

  window.addEventListener("mouseover", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

const track = document.getElementById("image-track");

const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};
/* -- Had to add extra lines for touch events -- */

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// fancy text animation
const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");

    outer.className = "outer";

    const inner = document.createElement("span");

    inner.className = "inner";

    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");

    letter.className = "letter";

    if (value === " ") {
      letter.innerHTML = "&nbsp;";
    } else {
      letter.innerText = value;
    }

    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);

    outer.appendChild(inner);

    element.appendChild(outer);
  });
};

enhance("channel-link");
enhance("channel-link2");
enhance("channel-link3");
enhance("channel-link4");
enhance("channel-link5");
enhance("WARD81");
enhance("twin");
enhance("");

// backgorund image change functions

function changeBackground(imagePath) {
  const container = document.querySelector(".background-image-container");
  container.style.backgroundImage = `url(${imagePath})`;
}

function resetBackground() {
  const container = document.querySelector(".background-image-container");
  container.style.backgroundImage = `url("landingbackground_white.png")`;
}

// passwortcheck
function checkPassword() {
  const correctPassword = "123"; // Ändern Sie dies in Ihr gewünschtes Passwort
  const inputPassword = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  if (inputPassword === correctPassword) {
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "fotografinnen.html"; // Ändern Sie dies in die gewünschte Zielseite
  } else {
    errorMessage.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "fotografinnen.html"; // Ändern Sie dies in die gewünschte Zielseite
  }
});
