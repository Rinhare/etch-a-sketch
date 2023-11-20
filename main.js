

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

function squarePrompt() {
    console.log("button was pressed")
    let userInput = prompt("give a number between 1-100");
    let value = Number(userInput);

    if(value > 100) {
        window.alert("number is over 100");
        return
    }
    else if (isNaN(value)) {
        window.alert("needs to be number")
        return
    }
    else {

        if(document.querySelector("#container")) {
            container.replaceChildren();
        }

        grid(value);
    }
}



grid();


const mouseOver = document.getElementById("container");

mouseOver.addEventListener(
    "mouseover", (event) => {

        if(event.target.id === "row") {

        event.target.style.background = getRandomColor();
        event.target.style.filter = 'brightness(1)'; 
        //resets color back to original
        // setTimeout(() => {
        //     event.target.style.background = "";
        // }, 500);
    }}
)

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0;i < 6; i++) {
        color += letters[Math.floor(Math.random()* 16)]
    }
    return color; 
}