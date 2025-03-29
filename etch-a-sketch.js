function main(){
    let gridSize = 16;
    createGrid(gridSize);
    document.querySelector(".grid-button").addEventListener("click", customizeGridSize)
}


function createGrid(gridSize){
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
    return square
}


function customizeGridSize (){
    document.querySelector(".container").innerHTML = "";
    newSize = prompt("Enter a grid size (1-100)")

    if (newSize < 1 || newSize > 100 || newSize % 1 != 0){
        alert("Grid size is not valid!")
        return
    }
    createGrid(newSize);
}


function drawOnSquare (event){
    event.target.classList.add("shaded-flex-squares")
}




main();