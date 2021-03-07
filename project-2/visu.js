/* 0-15 poss. hex value maps to color */
var colors = ['#96eb7c', '#9aeb7c', '#9deb7c', '#c3e378', 
              '#cdd94e', '#d9cb4e', '#d9a44e', '#d98f4e', 
              '#bd654e', '#c2451f', '#d64242', '#ad1a1a', 
              '#b3296b', '#f0308c', '#cf19a2', '#f200ff'];

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
    let buff = 2; // buffer
    let len  = tc.length;
    for(let x = 1; x < algos.length; ++x){
        let o = buff + len;
        rect( (o*x + x-1) * CELL_SIZE, 0, CELL_SIZE/2, HEIGHT);
    }
}

/* aux for drawLetters */
function drawLetter(l, r, c, dynamic_color = true){
    noStroke();
    textSize(CELL_SIZE);
    textAlign(CENTER);
    //stroke('WHITE');
    let ci = parseInt(l, BASE);
    if(isNaN(ci) || !dynamic_color) ci = 0;
    fill(colors[ci]);
    text(l, c * CELL_SIZE + 1, r * CELL_SIZE, 
                        CELL_SIZE, CELL_SIZE);
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
    let buff = 3;
    for(let x = 0; x < algos.length; ++x){
        drawLetters(algos[x].name, 0, 1 + x * (buff+tc.length), false);
    }
}