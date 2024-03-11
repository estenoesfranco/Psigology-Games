// Arreglo con las imágenes y sus valores
const imagenes = [
    { id: 'imagen1', valor: 1 },
    { id: 'imagen2', valor: 2 },
    { id: 'imagen3', valor: 3 },
    { id: 'imagen4', valor: 4 },
    { id: 'imagen5', valor: 5 },
    { id: 'imagen6', valor: 6 },
    { id: 'imagen7', valor: 7 },
    { id: 'imagen8', valor: 8 }
];

// Variables para almacenar las imágenes seleccionadas
let imagenSeleccionada1 = null;
let imagenSeleccionada2 = null;
let combinacionesCorrectas = 0;

// Agregamos un evento de clic a cada imagen
imagenes.forEach((imagen) => {
    const elemento = document.getElementById(imagen.id);
    elemento.addEventListener('click', () => {
        if (!imagenSeleccionada1) {
            imagenSeleccionada1 = imagen.valor;
        } else if (!imagenSeleccionada2) {
            imagenSeleccionada2 = imagen.valor;
            verificarCombinacion();
        }
    });
});

// Función para verificar si se hizo clic en la combinación correcta
function verificarCombinacion() {
    if (
        (imagenSeleccionada1 === 1 && imagenSeleccionada2 === 5) ||
        (imagenSeleccionada1 === 2 && imagenSeleccionada2 === 6) ||
        (imagenSeleccionada1 === 3 && imagenSeleccionada2 === 7) ||
        (imagenSeleccionada1 === 4 && imagenSeleccionada2 === 8)
    ) {
        combinacionesCorrectas++;
        mostrarMensaje(`¡Combinación correcta! (${combinacionesCorrectas} de 4)`);
        if (combinacionesCorrectas === 4) {
            mostrarMensaje('¡Has encontrado todas las combinaciones correctas!');
        }
        // Ocultamos las imágenes correctas
        ocultarImagenesCorrectas();
        // Reiniciamos las selecciones para buscar otras combinaciones
        imagenSeleccionada1 = null;
        imagenSeleccionada2 = null;
    } else {
        mostrarMensaje('¡Oh me parece que eso no es correcto!');
    }
}

// Función para ocultar las imágenes correctas
function ocultarImagenesCorrectas() {
    const imagenesCorrectas = [imagenSeleccionada1, imagenSeleccionada2];
    imagenesCorrectas.forEach((valor) => {
        const elemento = document.getElementById(`imagen${valor}`);
        elemento.style.display = 'none';
        let column1ImageSelected = 0;
        let column2ImageSelected = 0;
    });
}
// Función para mostrar un mensaje en la consola
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

//front
let column1ImageSelected = 0;
let column2ImageSelected = 0;

const i1C1 = document.getElementById("imagen1");
const i2C1 = document.getElementById("imagen2");
const i3C1 = document.getElementById("imagen3");
const i4C1 = document.getElementById("imagen4");

const i1C2 = document.getElementById("imagen5");
const i2C2 = document.getElementById("imagen6");
const i3C2 = document.getElementById("imagen7");
const i4C2 = document.getElementById("imagen8");

//INCOMPLETO () {

function changeSize(variable, boolean) {
    if (boolean) {
        variable.style.filter = "brightness(" + 75 + "%)";
    } else {
        variable.style.filter = "brightness(" + 100 + "%)";
    }
    if (column1ImageSelected >= 1 && column2ImageSelected >= 1) {
        if (column1ImageSelected == column2ImageSelected) {
            console.log("¡Combinación correcta!");
                const imagenesCorrectas = [column1ImageSelected, column1ImageSelected];
                imagenesCorrectas.forEach((valor) => {
                    const elemento = document.getElementById(`imagen${valor}`);
                    //HACER Q SE ELIMINE SOLO LAS IMAGENES SELECCIONADAS, CREO Q SE ELIMINAN TODAS QSY AÚN NO PUDE COMPROBARLO PQ ME ESTOY LLENDO A DORMIR Y NO PUEDO VER LA PÁGINA EN VIVO PQ NO ME PASARON NUNCA EL LINK Y FRANCO NO ESTÁ CONECTADO LOL
                    elemento.style.display = 'none';});
                    column1ImageSelected = 0;
                    column2ImageSelected = 0;
        } else {
            console.log("¡Oh!, me parece que eso no es correcto.");
        }
        column1ImageSelected = 0;
        column2ImageSelected = 0;
    }
}

//}

column1ImageSelected = document
    .getElementById("imagen1")
    .addEventListener("click", () => {
        column1ImageSelected = 1;
        changeSize(i1C1, true);
        changeSize(i2C1, false);
        changeSize(i3C1, false);
        changeSize(i4C1, false);
    });
column1ImageSelected = document
    .getElementById("imagen2")
    .addEventListener("click", () => {
        column1ImageSelected = 2;
        changeSize(i1C1, false);
        changeSize(i2C1, true);
        changeSize(i3C1, false);
        changeSize(i4C1, false);
    });
column1ImageSelected = document
    .getElementById("imagen3")
    .addEventListener("click", () => {
        column1ImageSelected = 3;
        changeSize(i1C1, false);
        changeSize(i2C1, false);
        changeSize(i3C1, true);
        changeSize(i4C1, false);
    });
column1ImageSelected = document
    .getElementById("imagen4")
    .addEventListener("click", () => {
        column1ImageSelected = 4;
        changeSize(i1C1, false);
        changeSize(i2C1, false);
        changeSize(i3C1, false);
        changeSize(i4C1, true);
    });

column2ImageSelected = document
    .getElementById("imagen5")
    .addEventListener("click", () => {
        column2ImageSelected = 1;
        changeSize(i1C2, true);
        changeSize(i2C2, false);
        changeSize(i3C2, false);
        changeSize(i4C2, false);
    });
column2ImageSelected = document
    .getElementById("imagen6")
    .addEventListener("click", () => {
        column2ImageSelected = 2;
        changeSize(i1C2, false);
        changeSize(i2C2, true);
        changeSize(i3C2, false);
        changeSize(i4C2, false);
    });
column2ImageSelected = document
    .getElementById("imagen7")
    .addEventListener("click", () => {
        column2ImageSelected = 3;
        changeSize(i1C2, false);
        changeSize(i2C2, false);
        changeSize(i3C2, true);
        changeSize(i4C2, false);
    });
column2ImageSelected = document
    .getElementById("imagen8")
    .addEventListener("click", () => {
        column2ImageSelected = 4;
        changeSize(i1C1, false);
        changeSize(i2C2, false);
        changeSize(i3C2, false);
        changeSize(i4C2, true);
    });