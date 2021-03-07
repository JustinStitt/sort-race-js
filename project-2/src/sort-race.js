const inputs = ["05CA62A7BC2B6F03", "065DE66B71F040BA",
                "0684FB89C3D5754E", "07C9A2D18D3E4B65",
                "09F48E7862ED2616", "1FAB3D47905FC286",
                "286E1AD0342D7859", "30E530BC4786AF21",
                "328DE47C65C10BA9", "34F2756FD18E90BA",
                "90BA34F07E56F180", "D7859286E2FD0342"];
              
const tc = inputs[Math.floor(Math.random() * inputs.length)];
/* globals */
const CELL_SIZE = 10;
const ROWS      = 45;
const COLS      = 75;
const HEIGHT    = ROWS * CELL_SIZE;
const WIDTH     = COLS * CELL_SIZE;
const BASE      = 16; // base for sorting (def = 16 = hex)
const BUFF_SIZE = 3;  // visual aid buffer

let frame_buffer = 60;
let frame        = 0;

/* toggleables */
let run       = true;
let show_grid = false;

/* p5.js bootstrapping */
function setup(){
    createCanvas(WIDTH, HEIGHT);
    drawAlgoNames();
    drawDividers();
    toolSetup();
    setupAlgos(tc);
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
    sSlider = createSlider(0, frame_buffer - 1, 
                              frame_buffer/2, 2);
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
