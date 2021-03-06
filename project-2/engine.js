let gstep = 0; // global step

function drawAlgo(algo){
    drawLetters(algo.arr, algo.lstep + 1, algo.start);
}

// create copies of input array for each algo to use independently
function setupAlgos(_arr){
    for(let x = 0; x < algos.length; ++x){
        algos[x].arr = [..._arr];
    }
}

// step each algo 
function stepAlgos(){
    for(let x = 0; x < algos.length; ++x){
        algos[x].step();
        drawAlgo(algos[x]); // draw this step
    }
}