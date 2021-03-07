// quicksort partitioner
function partition(arr, low, high){
    let pivot = arr[high]; // arbitrary pivot chosen
    let slow = low - 1;
    let fast = low;
    for(; fast < high; ++fast){
        if(arr[fast] <= pivot){
            ++slow;
            let tmp = arr[slow]; // tmp for swap
            arr[slow] = arr[fast];
            arr[fast] = tmp;
        }
    }
    ++slow;
    let tmp = arr[slow];
    arr[slow] = arr[fast];
    arr[fast] = tmp;
    // step done
    if(isSorted(arr)) qsort.sorted = true;
    return slow;
}

// recursive generator
function* quicksort_helper(arr, low, high){
    if(low >= high) return;
    let partition_index = partition(arr, low, high);
    yield arr; // generator
    yield * quicksort_helper(arr, low, partition_index - 1);  // recursive generator
    yield * quicksort_helper(arr, partition_index + 1, high); // ditto
}



/* entry (gen invoker) */
function quicksort(arr){
    if(qsort.lstep == 0)// first step
        qsort.generator = quicksort_helper(arr, 0, arr.length-1);
    return qsort.generator.next().value;
}

/* create algo object to represent this algo */
const qsort = new Algo(0);
qsort.sort_function = quicksort;
qsort.generator;
algos[0] = qsort;

// dummies
const gsort = new Algo(2);
const ssort = new Algo(3);

algos[2] = gsort;
algos[3] = ssort;