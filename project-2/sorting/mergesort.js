function merge(arr, l, r){
    let mp = midpoint(l, r);
    let aux = [] // auxilliary space for interlacing

    let li = l, ri = mp + 1;
    while(1){
        if(li > mp && ri > r) break; // if no more elements to add
        if(li > mp){ // if no more left half
            aux.push(arr[ri++]);
        }else if(ri > r){ // no more right half
            aux.push(arr[li++]);
        }else{ // we have both left and right to consider
            aux.push(arr[li]>arr[ri] ? arr[ri++] : arr[li++]);
        }
    }
    /* now replace arr with aux values */
    for(let x = 0, s = l; x < aux.length; ++x, ++s){
        arr[s] = aux[x];
    }
    if(isSorted(arr)){msort.sorted = true;}
}

function* mergesort_helper(arr, l, r){
    if(l >= r) return; // view empty
    let mp = midpoint(l, r);
    // merge sort left half
    yield* mergesort_helper(arr, l, mp); // include midpoint in left half (arbitrary)
    yield* mergesort_helper(arr, mp + 1, r);
    yield merge(arr, l, r);
}

function mergesort(arr){
    let l = 0, r = arr.length-1; // initial parameters
    if(msort.lstep == 0)// first step
        msort.generator = mergesort_helper(arr, l, r);
    return msort.generator.next().value;
}

/* compute midpoint */
const midpoint = (l, r) => l + Math.floor((r-l)/2);

const msort = new Algo(1);
msort.sort_function = mergesort;
msort.generator;
algos[1] = msort;