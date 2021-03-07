/* merge two sorted halves */
function merge(arr, l, r){
    let mp = midpoint(l, r);
    let aux = [] // auxilliary space for interlacing

    let li = l, ri = mp + 1;
    while(1){
        msort.total_steps++; // count steps
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
        msort.total_steps++;
        arr[s] = aux[x];
    }
    if(isSorted(arr)){msort.sorted = true;}
}

/* recursive generator */
function* mergesort_helper(arr, l, r){
    msort.total_steps++;
    if(l >= r) return; // view empty
    let mp = midpoint(l, r);
    // merge sort left half
    yield* mergesort_helper(arr, l, mp); // include midpoint in left half (arbitrary)
    yield* mergesort_helper(arr, mp + 1, r);
    yield merge(arr, l, r);
}

/* gen entry point */
function mergesort(arr){
    let l = 0, r = arr.length-1; // initial parameters
    if(msort.lstep == 0)// first step
        msort.generator = mergesort_helper(arr, l, r);
    return msort.generator.next().value;
}

/* compute midpoint */
const midpoint = (l, r) => l + Math.floor((r-l)/2);

/* create algo object to represent this algo */
const msort = new Algo('MERGE SORT');
msort.sort_function = mergesort;
msort.generator;