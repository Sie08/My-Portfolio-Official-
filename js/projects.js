function toggleProject(button) {
  const details = button.nextElementSibling;
  details.classList.toggle("show");
}

/* FILTER SYSTEM */

function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".project-filters button");

  buttons.forEach(btn => btn.classList.remove("active"));

  event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "flex";
    } else {
      card.style.display = card.dataset.category === category ? "flex" : "none";
    }
  });
}

// TOGGLE DETAILS
function toggleProject(button) {
  const details = button.nextElementSibling;
  details.classList.toggle("show");
}

// FILTER SYSTEM
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // active state
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projects.forEach(project => {
      const category = project.dataset.category;

      if (filter === "all" || filter === category) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });

  });
});
