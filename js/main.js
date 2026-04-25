/* =========================
   MAIN GLOBAL JS (CLEAN VERSION)
========================= */

/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

/* =========================
   ACTIVE LINK SYSTEM
========================= */

const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* =========================
   THEME SYSTEM (CLEAN)
========================= */

const toggle = document.getElementById("themeToggle");

/* LOAD SAVED THEME */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

/* TOGGLE THEME */
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}