// quicksort partitioner
function partition(arr, low, high){
    let pivot = arr[high];
    let slow = low - 1;
    let fast = low;
    for(; fast < high; ++fast){
        if(arr[fast] <= pivot){
            ++slow;
            let tmp = arr[slow];
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
    yield * quicksort_helper(arr, low, partition_index - 1);
    yield * quicksort_helper(arr, partition_index + 1, high);
}

// create algo object to represent this algo
const qsort = new Algo(0, 1);
qsort.sort_function = quicksort;
var generator;

// entry (gen invoker)
function quicksort(arr){
    if(qsort.lstep == 0)// first step
        generator = quicksort_helper(arr, 0, arr.length-1);
    if(qsort.sorted == true) console.log('sorted!');
    return generator.next().value;
}



// dummies
const msort = new Algo(1, 20);
const gsort = new Algo(2, 39);
const isort = new Algo(3, 58);

let algos = [qsort, msort, gsort, isort];