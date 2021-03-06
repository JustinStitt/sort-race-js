const tc1 = "5F7D8A1593B47B80"

// globals
const ROWS = 60;
const COLS = 75;
const CELL_SIZE = 10;
const HEIGHT = ROWS * CELL_SIZE;
const WIDTH =  COLS * CELL_SIZE;

//p5.js bootstrapping
function setup(){
    createCanvas(WIDTH, HEIGHT);
    drawAlgoNames();
    drawDividers();
    drawBuffers();
}

function draw(){//p5.js update loop
    //drawGrid();
    
    //drawLetters(tc1, 0, 1);
    
   
}

// idea:  hex characters based on value (visual inc. order) (green->red)