const contain = document.querySelector(".contain");
const btn = document.querySelector(".btn");

function toggleMenu() {
  contain.classList.toggle("translate");
}

btn.addEventListener("click", toggleMenu);
