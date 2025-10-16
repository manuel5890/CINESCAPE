const grid = document.getElementById("movies-grid");
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".search-box button");

let peliculas = []; 

fetch("peliculas.json")
  .then(response => {
    if (!response.ok) throw new Error("Error al cargar el JSON");
    return response.json();
  })
  .then(data => {
    peliculas = data;
    mostrarPeliculas(peliculas);
  })
  .catch(error => console.error("Error:", error));

function mostrarPeliculas(peliculas) {
  grid.innerHTML = ""; 

  peliculas.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${p.ruta_caratula}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p class="tag">${p.anio}</p>
    `;

    card.addEventListener("click", () => mostrarModal(p));

    grid.appendChild(card);
  });
}

function mostrarModal(p) {
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalDescription = document.getElementById("modal-description");
  const modalCast = document.getElementById("modal-cast");

  modalImg.src = p.ruta_caratula;
  modalTitle.textContent = p.nombre;
  modalCategory.textContent = `${p.categoria} • ${p.anio}`;
  modalDescription.textContent = p.sinopsis;
  modalCast.textContent = `${p.reparto.join(", ")}`;

  modal.style.display = "flex";
  modalContent.style.animation = "slideUp 0.4s ease forwards";

}

document.getElementById("close-modal").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.style.animation = "slideDown 0.4s ease forwards";

  setTimeout(() => {
    modal.style.display = "none";
  }, 400);
});

function buscarPeliculas() {
  const texto = searchInput.value.trim().toLowerCase();

  // filtramos las películas que coincidan con nombre o categoría
  const resultado = peliculas.filter(p =>
    p.nombre.toLowerCase().includes(texto) ||
    p.categoria.toLowerCase().includes(texto)
  );

  // volvemos a mostrar solo las que coincidan
  mostrarPeliculas(resultado);
}

searchInput.addEventListener("input", buscarPeliculas);
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.style.animation = "slideDown 0.4s ease forwards";

  setTimeout(() => {
    modal.style.display = "none";
  }, 400);

