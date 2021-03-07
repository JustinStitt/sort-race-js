/* Algo objects step with their sort_function and track a local step */
class Algo{
    constructor(n){
        this.idx         = algos.length; // idx of this algo
        this.start       = 1 + this.idx * (BUFF_SIZE+tc.length) // where to start the algo's feed
        this.lstep       = 0; // current 'local' step
        this.total_steps = 0; // how many steps total (through all rotations)
        this.row         = 1; // where to draw the snapshot array
        this.rotations   = 0; // total number of iterations
        this.sorted      = false; // is the array sorted?
        this.sort_function = new Function(); // function to step, fed by generator
        this.arr         = []; // snapshot array
        this.og_arr      = []; // originial array (will rotate)
        this.done        = false; // is this algo done? -> show this.total_steps
        this.name        = n;
        algos.push(this);
    }

    /* called each update loop -- unless done with n-1 rotations */
    step() {
        if(this.sorted){ // if array is sorted, handle some logic
            if(this.rotations >= this.og_arr.length - 1 && !this.done){
                drawAlgo(this);
                drawLetters("DONE:" + this.total_steps + " steps", 
                                ((this.row)%ROWS) + 1, this.start, false);
                this.done = true;
            }else if(!this.done){ // if we still have some rotations to go then reset
                drawAlgo(this);
                this.reset();
            }
            return;
        }
        drawAlgo(this); // write algo to visual buffer
        this.sort_function(this.arr); // call our generator function
        this.lstep++;
        if(this.row >= ROWS - 1){ // wrap around buffer
            this.row = 1;
            this.clearBuffer(); // clear buffer once we reach the end
        }
        
    }

    /* reset our algo to handle next rotation */
    reset(){
        this.lstep = 0;   // reset steps
        this.row++;       // skip a row
        this.rotations++;
        this.og_arr.rotate();
        this.arr = [...this.og_arr]; // assign working array to rotated original array
        this.sorted = false;
    }

    /* clear visual buffer */
    clearBuffer(){
        noStroke();
        fill('BLACK');
        rect(this.start * CELL_SIZE, 1 * CELL_SIZE, 
                       this.arr.length * CELL_SIZE, HEIGHT);
        if(show_grid) drawGrid();
    }
}

