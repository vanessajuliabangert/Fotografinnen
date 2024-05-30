document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("js-cursor");
  const cursorBig = document.getElementById("js-cursor__big");
  const cursorSmall = document.getElementById("js-cursor__small");
  const links = document.querySelectorAll(".curserhover, .call-to-action");

  // Update cursor position on mouse move
  window.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
  });

  // Add event listeners to links
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursorBig.style.transform = "scale(1)";
      cursorSmall.style.transform = "scale(0)";
    });

    link.addEventListener("mouseleave", () => {
      cursorBig.style.transform = "scale(0)";
      cursorSmall.style.transform = "scale(1)";
    });
  });
});
