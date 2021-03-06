const tc1 = "5F7D8A1593B47B80" // test case #1

// globals
const ROWS = 45;
const COLS = 75;
const CELL_SIZE = 10;
const HEIGHT = ROWS * CELL_SIZE;
const WIDTH =  COLS * CELL_SIZE;

let frame_buffer = 60;
let frame = 0;
let run = true;

//p5.js bootstrapping
function setup(){
    createCanvas(WIDTH, HEIGHT);
    drawAlgoNames();
    drawDividers();
    //drawBuffers();
    setupAlgos(tc1);
    toolSetup();
}

function toolSetup(){
    //checkboxes
    let tools = createDiv('tools: ');
    togglePause = createCheckbox(' pause', false);
    togglePause.changed(function(){run = !run;});
    //sliders
    let speed = createDiv('speed: ');
    sSlider = createSlider(0, frame_buffer - 1, frame_buffer/2);
}

function draw(){//p5.js update loop
    if(!run) return;
    if(frame % (frame_buffer - sSlider.value()) == 0){
       stepAlgos();
   }
   frame++;
}