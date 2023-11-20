
grid = function(squaresValue) {
    
    let squaresAmount = 0;
    
    if(squaresValue !== undefined) {
        squaresAmount = squaresValue;
        console.log("value of squares " + squaresAmount);
    }
    else {
        squaresAmount = 16;
        console.log("value of squares " + squaresAmount);
    }
    
    const container = document.querySelector("#container");
    
    for(i = 0; squaresAmount >= i; i++) {
        const square = document.createElement("div");
        container.appendChild(square);
        square.textContent = "test";
    }
    
    
}

grid();