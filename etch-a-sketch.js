function main(){
    
}

function createSquare(){
    let square = document.createElement("div");
    square.classList.add(flex-squares);
    return square;
}

function createRow(gridWidth = 16){
    let row = document.createElement("div")
    for (int i = 0; i < gridWidth; i++;){
        row.append(createSquare());
    }
}

main();