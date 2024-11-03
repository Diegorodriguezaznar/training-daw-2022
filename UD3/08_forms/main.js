document.addEventListener("DOMContentLoaded", function () {
    const elements = {
        nombre: document.getElementById("nombre"),
        apellidos: document.getElementById("apellidos"),
        activarSi: document.getElementById("activarSi"),
        activarNo: document.getElementById("activarNo"),
        check2: document.getElementById("check2"),
        combo: document.getElementById("combo"),
        enviar: document.getElementById("enviar"),
        mensajeError: document.getElementById("mensajeError"),
        descripcion: document.getElementById("descripcion"),
        contador: document.getElementById("contador"),
    };

    const actualizarEstado = () => {
        elements.combo.disabled = !elements.activarSi.checked;
        elements.enviar.disabled = !(elements.activarSi.checked && elements.check2.checked);
    };

    elements.activarSi.addEventListener("change", actualizarEstado);
    elements.activarNo.addEventListener("change", actualizarEstado);
    elements.check2.addEventListener("change", actualizarEstado);

    elements.descripcion.addEventListener("input", () => {
        elements.contador.textContent = `${elements.descripcion.value.length}/80`;
    });

    document.getElementById("miFormulario").addEventListener("submit", (event) => {
        event.preventDefault();

        if (elements.nombre.value.trim() === "" || elements.apellidos.value.trim() === "") {
            elements.mensajeError.textContent = "Nombre y apellidos son obligatorios.";
            return;
        }

        elements.mensajeError.textContent = "";
        elements.enviar.disabled = true;
        console.log("Formulario enviado correctamente.");
    });
});
