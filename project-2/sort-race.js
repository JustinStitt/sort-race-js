const tc1 = "5F7D8A1593B47B80" // test case #1

// globals
const ROWS      = 45;
const COLS      = 75;
const CELL_SIZE = 10;
const HEIGHT    = ROWS * CELL_SIZE;
const WIDTH     = COLS * CELL_SIZE;

let frame_buffer = 60;
let frame        = 0;

//toggleables
let run       = true;
let show_grid = false;

/* p5.js bootstrapping */
function setup(){
    createCanvas(WIDTH, HEIGHT);
    drawAlgoNames();
    drawDividers();
    //drawBuffers();
    setupAlgos(tc1);
    toolSetup();
}

/* setup GUI settings */
function toolSetup(){
    //checkboxes
    createDiv('tools: ');
    pause_toggle = createCheckbox(' pause', false);
    pause_toggle.changed(function(){run = !run;});
    grid_toggle = createCheckbox(' show grid', false);
    grid_toggle.changed(toggleGrid);
    //sliders
    createDiv('speed: ');
    sSlider = createSlider(0, frame_buffer - 1, frame_buffer/2);
}

/* toggle show grid layout */
function toggleGrid(){
    show_grid = !show_grid;
    (show_grid ? drawGrid() : drawGrid('BLACK')); // ternary
}

/* ran once per frame modulo frame_buffer */
function draw(){//p5.js update loop
    if(!run) return;
    if(frame % (frame_buffer - sSlider.value()) == 0)
       stepAlgos();
    frame++;
}
