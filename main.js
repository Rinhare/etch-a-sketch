
const mouseHover = document.getElementById("container")

grid = function(squaresValue) {
    
    let squaresAmount = 0;
    
    if(squaresValue !== undefined) {
        squaresAmount = squaresValue ;
        console.log("value of squares " + squaresAmount);
    }
    else {
        squaresAmount = 5;
        console.log("value of squares " + squaresAmount);
    }
    
    const container = document.querySelector("#container");
    
    // loop for creating squares.  
    for(i = 1; squaresAmount >= i; i++) {
        const columnSquare = document.createElement("div");
        columnSquare.setAttribute("id", "column-" + i);
        container.appendChild(columnSquare);

        const rowSquareSelector = document.querySelector("#column-" + i)

        for(j = 1; squaresAmount >=j; j++ ) {
            const rowSquare = document.createElement("div")
            rowSquare.setAttribute("id", "row" )
            rowSquareSelector.appendChild(rowSquare);
        }

    }
    
    
}

grid();