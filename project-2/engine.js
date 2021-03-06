let gstep = 0; // global step

/* draw the algo's current snapshotted array */
function drawAlgo(algo){
    drawLetters(algo.arr, algo.lstep + 1, algo.start);
}

/* create copies of input array for each algo to use independently */
function setupAlgos(_arr){
    for(let x = 0; x < algos.length; ++x){
        algos[x].arr = [..._arr];
    }
}

/* step each algo with its array */
function stepAlgos(){
    for(let x = 0; x < algos.length; ++x){
        if(!algos[x].sorted){
            algos[x].step();
            drawAlgo(algos[x]); // draw this step
        }
    }
}
