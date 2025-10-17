const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("toggle");

  if (nav.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // ✅ disable scroll
  } else {
    document.body.style.overflow = ""; // enable scroll
  }
});
