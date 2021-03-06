
var colors = ['#96eb7c', '#9aeb7c', '#9deb7c', '#c3e378', 
              '#cdd94e', '#d9cb4e', '#d9a44e', '#d98f4e', 
              '#d97c4e', '#d9654e', '#e07070', '#d95a4e', 
              '#d43d2f', '#a53ad6', '#6e30c9', '#5a06d4'];


function drawGrid(){
    noFill();
    stroke('WHITE');
    for(let r = 0; r < ROWS; ++r){
        for(let c = 0; c < COLS; ++c){
            rect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE );
        }
    }    
}

function drawDividers(){
    noStroke();
    fill('RED');
    rect(18 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(37 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(56 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);

}

function drawBuffers(){
    noStroke();
    fill('BLUE');
    rect(0 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(17 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(19 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(36 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(38 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(55 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(57 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(74 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
}

// aux for drawLetters
function drawLetter(l, r, c, dynamic_color = true){
    textSize(CELL_SIZE);
    textAlign(CENTER);
    //stroke('WHITE');
    let ci = parseInt(l, 16);
    if(isNaN(ci) || !dynamic_color) ci = 0;
    fill(colors[ci]);
    text(l, c * CELL_SIZE + 1, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function drawLetters(s, sr, sc, dynamic_color = true){
    len = s.length;
    for(let x = 0; x < len; ++x){
        drawLetter(s[x], sr, sc + x, dynamic_color);
    }
}

function drawAlgoNames(){
    algo1 = "QUICKSORT";
    algo2 = "MERGE SORT";
    algo3 = "GOLD\'S PORE SORT";
    algo4 = "INSERTION SORT";

    drawLetters(algo1, 0, 1,  false);
    drawLetters(algo2, 0, 20, false);
    drawLetters(algo3, 0, 39, false);
    drawLetters(algo4, 0, 58, false);

}