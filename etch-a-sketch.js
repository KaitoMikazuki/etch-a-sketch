function main(){
    let gridSize = 100;
    // Clones instead of building row from scratch
    for (let i = 0; i < gridSize; i++){
        let row = createRow(gridSize);
        document.querySelector(".container").append(row)
    }
}

function createRow(gridSize){
    let row = document.createElement("div")
    row.classList.add("flex-row");
    for (let i = 0; i < gridSize; i++){
        row.append(createSquare());
        console.log("square created");
    }
    return row
}
function createSquare(){
    let square = document.createElement("div");
    square.classList.add("flex-squares");
    square.addEventListener('mouseenter', drawOnSquare)
    return square;
}

function drawOnSquare (event){
    event.target.style.backgroundColor = "black"
}


main();