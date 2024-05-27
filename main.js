// Fotografie scroll effect
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

// Landingpage einfärbung Text
document.addEventListener("DOMContentLoaded", function () {
  function highlightWords(elementId, wordsToHighlight) {
    var content = document.getElementById(elementId);
    if (content) {
      var text = content.innerHTML;
      wordsToHighlight.forEach(function (word) {
        var regex = new RegExp(`(${word})`, "gi");
        text = text.replace(regex, '<span class="highlight">$1</span>');
      });
      content.innerHTML = text;
    }
  }

  var wordsToHighlight = [
    "Frau",
    "Fotografie",
    "Fotografinnen",
    "Fotografin",
    "fotografiert",
    "Frauen",
    "fotografierte",
  ];

  highlightWords("landingcontent", wordsToHighlight);
  highlightWords("WARD81text", wordsToHighlight);
  highlightWords("StreetwiseText", wordsToHighlight);
  highlightWords("TwinsText", wordsToHighlight);
});

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

// timeline
