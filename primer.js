function calcularResultado() {
    const respuestas = document.querySelectorAll('input[type="radio"]:checked');

    if (respuestas.length < 3) {
        alert("Por favor, responde todas las preguntas.");
        return;
    }

    let conteo = {
        visual: 0,
        escribiendo: 0,
        explicando: 0,
        tiempo: 0
    };

    respuestas.forEach(respuesta => {
        conteo[respuesta.value]++;
    });

    let resultadoFinal = "";
    let max = 0;

    for (let tipo in conteo) {
        if (conteo[tipo] > max) {
            max = conteo[tipo];
            resultadoFinal = tipo;
        }
    }

    let mensaje = "";

    switch (resultadoFinal) {
        case "visual":
            mensaje = "Tú estilo es VISUAL. Usa mapas mentales, esquemas y diagramas.";
            break;
        case "escribiendo":
            mensaje = "Tú estilo es ESCRIBIENDO. Los resúmenes y apuntes son ideales para ti.";
            break;
        case "explicando":
            mensaje = "Tú estilo es EXPLICANDO. Enseñar a otros te ayuda a aprender mejor.";
            break;
        case "tiempo":
            mensaje = "Tú estilo es ORGANIZACIÓN DEL TIEMPO. El método Pomodoro es perfecto para ti.";
            break;
    }

    document.getElementById("resultado").innerHTML = `
        <h3>Resultado</h3>
        <p>${mensaje}</p>
    `;
}

function reiniciarTest() {
    document.getElementById("formTest").reset();
    document.getElementById("resultado").innerHTML = "";
}


document.addEventListener("DOMContentLoaded", function () {
    let visitas = localStorage.getItem("contadorVisitasWeb");

    if (!visitas) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }

    localStorage.setItem("contadorVisitasWeb", visitas);

    const contenedor = document.getElementById("contador-visitas");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    visitas.toString().split("").forEach(digito => {
        const span = document.createElement("span");
        span.textContent = digito;
        contenedor.appendChild(span);
    });
});





