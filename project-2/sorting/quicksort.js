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
    if(isSorted(arr)) quicksort_helper.sorted = true;
    return slow;
}

// recursive generator
function* quicksort_helper(arr, low, high){
    if(low >= high) return;
    console.log('low: ', low, ' high : ', high);
    let partition_index = partition(arr, low, high);
    yield arr; // generator
    yield * quicksort_helper(arr, low, partition_index - 1);
    yield * quicksort_helper(arr, partition_index + 1, high);
}

var generator;

// entry (gen invoker)
function quicksort(arr){
    if(quicksort.lstep == 0)// first step
        generator = quicksort_helper(arr, 0, arr.length-1);

    if(quicksort_helper.sorted == true) console.log('sorted!');
    ++quicksort.lstep;
    return generator.next().value;
}

/*
    javascript functions are first-class objects, they can have properties!
    use this as pseudo-static fields. (better than globals)
*/
quicksort.lstep = 0;
quicksort_helper.sorted = false;