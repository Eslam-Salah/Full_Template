let menuBtn = document.getElementById("menu-btn");
let searchBtn = document.getElementById("search-btn");
let colorBtn = document.getElementById("color-btn");
let themeBtn = document.getElementById("theme-btn");

let navbar = document.querySelector(".navbar");
let searchForm = document.querySelector(".search-form");
let colorsPalette = document.querySelector(".colors-palette");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  colorsPalette.classList.remove("active");
};

document.onclick = (e) => {
  if (e.target !== menuBtn && e.target !== navbar) {
    navbar.classList.remove("active");
  }
};

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  colorsPalette.classList.remove("active");
};

colorBtn.onclick = () => {
  colorsPalette.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

// localStorage
let colorOption = localStorage.getItem("color-option");

if (colorOption !== null) {
  document
    .querySelector(":root")
    .style.setProperty("--main-color", colorOption);
}

document.querySelectorAll(".colors-palette .color").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    colorsPalette.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    // document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main-color", color);
    // localStorage
    localStorage.setItem("color-option", color);
  });
});

// To Top Btn
let toTopBtn = document.querySelector(".to-up");

window.onscroll = function () {
  if (this.scrollY > 1000) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
};

toTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Spinner
window.onload = () => {
  let spinner = document.querySelector(".spinner");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    spinner.style.display = "none";
    document.body.style.overflow = "auto";
  }, 3000);
};
