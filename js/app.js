const grid = document.getElementById("movies-grid");

fetch("peliculas.json")
  .then(response => {
    if (!response.ok) throw new Error("Error al cargar el JSON");
    return response.json();
  })
  .then(peliculas => {
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
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalDescription = document.getElementById("modal-description");
  const modalCast = document.getElementById("modal-cast");

  modalImg.src = p.ruta_caratula;
  modalTitle.textContent = p.nombre;
  modalCategory.textContent = `${p.categoria} • ${p.anio}`;
  modalDescription.textContent = p.sinopsis;
  modalCast.textContent = `Reparto: ${p.reparto.join(", ")}`;

  modal.style.display = "flex";
}

document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});