function randomImagePosition(array) {
    array.sort(function () { return Math.random() - 0.5 })
    return array;
}

imgsColumn1Order = randomImagePosition([
    `<img src="./Img/madera1.jpeg" alt="" class="Fila1_img imagen" id="imagen1" draggable="false"> `,
    `<img src="./Img/metal2.jpeg" alt="" class="Fila1_img imagen" id="imagen2" draggable="false"> `,
    `<img src="./Img/plastico1.jpeg" alt="" class="Fila1_img imagen" id="imagen3" draggable="false"> `,
    `<img src="./Img/vidrio1.jpeg" alt="" class="Fila1_img imagen" id="imagen4" draggable="false"> `])

const column1 = document.getElementById("columna1")
column1.innerHTML = imgsColumn1Order[0] + imgsColumn1Order[1] + imgsColumn1Order[2] + imgsColumn1Order[3]

imgsColumn2Order = randomImagePosition([
    `<img src="/juegos-Sicologos-main/Img/madera2.jpeg" alt="" class="Fila2_img imagen" id="imagen5" draggable="false"> `,
    `<img src="/juegos-Sicologos-main/Img/metalreal1.jpeg" alt="" class="Fila2_img imagen" id="imagen6" draggable="false"> `,
    `<img src="/juegos-Sicologos-main/Img/plastico2.jpeg" alt="" class="Fila2_img imagen" id="imagen7" draggable="false"> `,
    `<img src="/juegos-Sicologos-main/Img/vidrio2.jpeg" alt="" class="Fila2_img imagen" id="imagen8" draggable="false"> `])

const column2 = document.getElementById("columna2")
column2.innerHTML = imgsColumn2Order[0] + imgsColumn2Order[1] + imgsColumn2Order[2] + imgsColumn2Order[3]

let winMessage = prompt("Ingrese el mensaje que desee que aparezca al ganar.")
let loseMessage = prompt("Ingrese el mensaje que desee que aparezca al perder")

let column1ImageSelected = 0;
let column2ImageSelected = 0;
let correctImages = 0;

const i1C1 = document.getElementById("imagen1");
const i2C1 = document.getElementById("imagen2");
const i3C1 = document.getElementById("imagen3");
const i4C1 = document.getElementById("imagen4");

const i1C2 = document.getElementById("imagen5");
const i2C2 = document.getElementById("imagen6");
const i3C2 = document.getElementById("imagen7");
const i4C2 = document.getElementById("imagen8");

let result = ""

function changeSize(variable, boolean, alt) {
    console.log(column1ImageSelected, column2ImageSelected)
    if (boolean) {
        variable.style.filter = "brightness(" + 75 + "%)";
        if (column1ImageSelected >= 1 && column2ImageSelected >= 1)
            if (column1ImageSelected === column2ImageSelected) {
                correctImages += 1
                console.log(`¡Combinación correcta! (${correctImages}/4)`);
                variable.style.display = "none"
                alt.style.display = 'none';
                column1ImageSelected = 0;
                column2ImageSelected = 0;
                if (correctImages === 4) {
                    result = alert(winMessage)
                    location.reload()
                }
            } else {
                alert("Oh Parece que te haz equivocado que cojones...");
                alert(loseMessage)
                location.reload()
            }
    } else {
        variable.style.filter = "brightness(" + 100 + "%)";
    }
}

i1C1.addEventListener("click", () => {
    column1ImageSelected = 1;
    changeSize(i1C1, true, i1C2);
    changeSize(i2C1, false, i2C2);
    changeSize(i3C1, false, i3C2);
    changeSize(i4C1, false, i4C2);
});
i2C1.addEventListener("click", () => {
    column1ImageSelected = 2;
    changeSize(i1C1, false, i1C2);
    changeSize(i2C1, true, i2C2);
    changeSize(i3C1, false, i3C2);
    changeSize(i4C1, false, i4C2);
});
i3C1.addEventListener("click", () => {
    column1ImageSelected = 3;
    changeSize(i1C1, false, i1C2);
    changeSize(i2C1, false, i2C2);
    changeSize(i3C1, true, i3C2);
    changeSize(i4C1, false, i4C2);
});
i4C1.addEventListener("click", () => {
    column1ImageSelected = 4;
    changeSize(i1C1, false, i1C2);
    changeSize(i2C1, false, i2C2);
    changeSize(i3C1, false, i3C2);
    changeSize(i4C1, true, i4C2);
});

i1C2.addEventListener("click", () => {
    column2ImageSelected = 1;
    changeSize(i1C2, true, i1C1);
    changeSize(i2C2, false, i2C1);
    changeSize(i3C2, false, i3C1);
    changeSize(i4C2, false, i4C1);
});
i2C2.addEventListener("click", () => {
    column2ImageSelected = 2;
    changeSize(i1C2, false, i1C1);
    changeSize(i2C2, true, i2C1);
    changeSize(i3C2, false, i3C1);
    changeSize(i4C2, false, i4C1);
});
i3C2.addEventListener("click", () => {
    column2ImageSelected = 3;
    changeSize(i1C2, false, i1C1);
    changeSize(i2C2, false, i2C1);
    changeSize(i3C2, true, i3C1);
    changeSize(i4C2, false, i4C1);
});
i4C2.addEventListener("click", () => {
    column2ImageSelected = 4;
    changeSize(i1C2, false, i1C1);
    changeSize(i2C2, false, i2C1);
    changeSize(i3C2, false, i3C1);
    changeSize(i4C2, true, i4C1);
});