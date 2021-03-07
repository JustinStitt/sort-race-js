let gstep = 0; // global step
let algos = new Array(4);

/* draw the algo's current snapshotted array */
function drawAlgo(algo){
    algo.row++;
    drawLetters(algo.arr, algo.row, algo.start);
}

/* create copies of input array for each algo to use independently */
function setupAlgos(_arr){
    for(let x = 0; x < algos.length; ++x){
        algos[x].arr    = [..._arr];
        algos[x].og_arr = [..._arr];
    }
}

/* step each algo with its array */
function stepAlgos(){
    for(let x = 0; x < algos.length; ++x){
        algos[x].step();
    }
}
