const title = document.querySelector("h1");
const aboutParagraph = document.querySelector("p");

window.addEventListener("scroll", onScroll);

function onScroll(event) {
  // console.log("scroll");
  title.style.top = window.scrollY / 1.2 + "px";
  title.style.opacity = (400 - window.scrollY) / 400;
  aboutParagraph.style.top = window.scrollY / 2.5 + "px";
  aboutParagraph.style.opacity = (600 - window.scrollY) / 600;
}
