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
    return slow;
}

// recursive generator
function* quicksort_helper(arr, low, high){
    if(low >= high) return;
    let partition_index = partition(arr, low, high);
    yield arr; // generator
    quicksort_helper(arr, low, partition_index - 1);
    quicksort_helper(arr, partition_index + 1, high);
}

// entry (gen invoker)
function quicksort(arr){
    ++quicksort.lstep;
    return quicksort_helper(arr, 0, arr.length-1).next().value;
}

/*
    javascript functions are first-class objects, they can have properties!
    use this as pseudo-static fields. (better than globals)
*/
quicksort.lstep = 0;