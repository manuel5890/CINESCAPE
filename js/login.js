document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formLogin");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault;

        // aqui se obtienen los valores de los campos
        const email = document.getElementById("email").value.trim();
        const contraseña = document.getElementById("password").value.trim();

        // Estos serian el usuario y la clave valida
        const usuario = "buscoempleo@gmail.com";
        const clave = "2025-10";

        // se usa un if para verificar
        if (email === usuario && contraseña === clave){
            alert("Iniciaste seccion")
            window.location.href = "index.html";
        }
        else{
            alert("Incorrecto, Intente nuevamente");
        }
    });
});