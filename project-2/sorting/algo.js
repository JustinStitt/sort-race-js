/* Algo objects step with their sort_function and track a local step */
class Algo{
    constructor(i, s){
        this.idx = i;
        this.start = s;
        this.lstep = 0;
        this.row   = 0;
        this.rotations = 0;
        this.sorted = false;
        this.sort_function = new Function();
        this.arr    = [];
        this.og_arr = [];
    }
    step() {
        this.sort_function(this.arr);
        this.lstep++;
        this.row++;
        if(this.row >= ROWS - 1){
            this.row = 0;
            this.clearBuffer();
        }
    }
    reset(){
        this.lstep = 0;   // reset steps
        this.row++;       // skip a row
        this.rotations++;
        this.og_arr.rotate();
        this.arr = [...this.og_arr]; // assign working array to rotated original array
        this.sorted = false;
    }
    clearBuffer(){
        noStroke();
        fill('BLACK');
        rect(this.start * CELL_SIZE, 1 * CELL_SIZE, this.arr.length * CELL_SIZE, HEIGHT);
        if(show_grid) drawGrid();
        this.row++;
    }
}

