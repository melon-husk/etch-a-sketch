let element = document.createElement('div').setAttribute();

document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
document.getElementById("myBtn").style.height = "50px";

let container = document.getElementById("container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText(i + 1);
        container.appendChild(cell).className = "grid-item";
    };
};
makeGrid(16, 16);