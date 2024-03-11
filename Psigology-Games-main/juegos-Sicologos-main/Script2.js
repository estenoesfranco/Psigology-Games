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

function changeSize(variable, boolean, alt) {
    if (boolean) {
        variable.style.filter = "brightness(" + 75 + "%)";
        if (column1ImageSelected >= 1 && column2ImageSelected >= 1)
            if (column1ImageSelected == column2ImageSelected) {
                correctImages += 1
                console.log(`¡Combinación correcta! (${correctImages}/4)`);
                variable.style.display = "none"
                alt.style.display = 'none';
                column1ImageSelected = 0;
                column2ImageSelected = 0;
                if (correctImages === 4) {
                    alert("Has Ganado, Ostia")
                }
            } else {
                console.log("¡Oh!, me parece que eso no es correcto.");
            }
    } else {
        variable.style.filter = "brightness(" + 100 + "%)";
    }
}

column1ImageSelected = document
    .getElementById("imagen1")
    .addEventListener("click", () => {
        column1ImageSelected = 1;
        changeSize(i1C1, true, i1C2);
        changeSize(i2C1, false, i2C2);
        changeSize(i3C1, false, i3C2);
        changeSize(i4C1, false, i4C2);
    });
column1ImageSelected = document
    .getElementById("imagen2")
    .addEventListener("click", () => {
        column1ImageSelected = 2;
        changeSize(i1C1, false, i1C2);
        changeSize(i2C1, true, i2C2);
        changeSize(i3C1, false, i3C2);
        changeSize(i4C1, false, i4C2);
    });
column1ImageSelected = document
    .getElementById("imagen3")
    .addEventListener("click", () => {
        column1ImageSelected = 3;
        changeSize(i1C1, false, i1C2);
        changeSize(i2C1, false, i2C2);
        changeSize(i3C1, true, i3C2);
        changeSize(i4C1, false, i4C2);
    });
column1ImageSelected = document
    .getElementById("imagen4")
    .addEventListener("click", () => {
        column1ImageSelected = 4;
        changeSize(i1C1, false, i1C2);
        changeSize(i2C1, false, i2C2);
        changeSize(i3C1, false, i3C2);
        changeSize(i4C1, true, i4C2);
    });

column2ImageSelected = document
    .getElementById("imagen5")
    .addEventListener("click", () => {
        column2ImageSelected = 1;
        changeSize(i1C2, true, i1C1);
        changeSize(i2C2, false, i2C1);
        changeSize(i3C2, false, i3C1);
        changeSize(i4C2, false, i4C1);
    });
column2ImageSelected = document
    .getElementById("imagen6")
    .addEventListener("click", () => {
        column2ImageSelected = 2;
        changeSize(i1C2, false, i1C1);
        changeSize(i2C2, true, i2C1);
        changeSize(i3C2, false, i3C1);
        changeSize(i4C2, false, i4C1);
    });
column2ImageSelected = document
    .getElementById("imagen7")
    .addEventListener("click", () => {
        column2ImageSelected = 3;
        changeSize(i1C2, false, i1C1);
        changeSize(i2C2, false, i2C1);
        changeSize(i3C2, true, i3C1);
        changeSize(i4C2, false, i4C1);
    });
column2ImageSelected = document
    .getElementById("imagen8")
    .addEventListener("click", () => {
        column2ImageSelected = 4;
        changeSize(i1C1, false, i1C1);
        changeSize(i2C2, false, i2C1);
        changeSize(i3C2, false, i3C1);
        changeSize(i4C2, true, i4C1);
    });