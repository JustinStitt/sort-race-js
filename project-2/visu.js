/* 0-15 poss. hex value maps to color */
var colors = ['#96eb7c', '#9aeb7c', '#9deb7c', '#c3e378', 
              '#cdd94e', '#d9cb4e', '#d9a44e', '#d98f4e', 
              '#d97c4e', '#d9654e', '#e07070', '#d95a4e', 
              '#d43d2f', '#a53ad6', '#6e30c9', '#5a06d4'];

/* draws visual grid */
function drawGrid(c = 'GRAY'){
    noFill();
    stroke(c);
    for(let r = 0; r < ROWS; ++r){
        for(let c = 0; c < COLS; ++c){
            rect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE );
        }
    }    
}
/* draws dividers used for formatting */
function drawDividers(){
    noStroke();
    fill('GRAY');
    rect(18 * CELL_SIZE, 0, CELL_SIZE/2, HEIGHT);
    rect(37 * CELL_SIZE, 0, CELL_SIZE/2, HEIGHT);
    rect(56 * CELL_SIZE, 0, CELL_SIZE/2, HEIGHT);
}

/* draws buffers used for debugging formatting -- mainly */
function drawBuffers(){
    noStroke();
    fill('BLUE');
    rect(0  * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(17 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(19 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(36 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(38 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(55 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(57 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
    rect(74 * CELL_SIZE, 0, CELL_SIZE, HEIGHT);
}

/* aux for drawLetters */
function drawLetter(l, r, c, dynamic_color = true){
    noStroke();
    textSize(CELL_SIZE);
    textAlign(CENTER);
    //stroke('WHITE');
    let ci = parseInt(l, 16);
    if(isNaN(ci) || !dynamic_color) ci = 0;
    fill(colors[ci]);
    text(l, c * CELL_SIZE + 1, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

/* invoke drawLetter for each letter in s */
function drawLetters(s, sr, sc, dynamic_color = true){
    len = s.length;
    for(let x = 0; x < len; ++x){
        drawLetter(s[x], sr, sc + x, dynamic_color);
    }
}

/* name of algos to be drawn with drawLetters -> drawLetter */
function drawAlgoNames(){
    algo1 = "QUICKSORT";
    algo2 = "MERGE SORT";
    algo3 = "GOLD\'S PORE SORT";
    algo4 = "SELECTION SORT";

    drawLetters(algo1, 0, 1,  false);
    drawLetters(algo2, 0, 20, false);
    drawLetters(algo3, 0, 39, false);
    drawLetters(algo4, 0, 58, false);
}