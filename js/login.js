document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formLogin");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // aqui se obtienen los valores de los campos
        const email = document.getElementById("email").value.trim();
        const contraseña = document.getElementById("password").value.trim();

        // Estos serian el usuario y la clave valida
        const usuario = "cine@gmail.com";
        const clave = "1234";

        // se usa un if para verificar
        if (email === usuario && contraseña === clave){
            alert("Correcto, Bienvenido");
            window.location.href = "dashboard.html";
        }
        else{
            alert("Incorrecto, Intente nuevamente");
        }
    });
});