/* return the index of the smallest element from left bound */
function findSmallest(arr, l = 0){
    let smallest = l;
    let n = arr.length;
    for(let x = l; x < n; ++x){
        ssort.total_steps++;
        if(arr[x] < arr[smallest]){
            smallest = x;
        }
    }
    return smallest;
}

/* generator to update snapshot array */
function* selectionsort_helper(arr){
    let l = 0; // pivot of sorted vs unsorted array
    while(l < arr.length){
        let small = findSmallest(arr, l);
        // swap smallest index and pivot index then inc. pivot
        [arr[small], arr[l]] = [arr[l], arr[small]];
        l++;
        ssort.total_steps++;
        yield arr;
    }
    ssort.sorted = true;
}

/* generator entry */
function selectionsort(arr){
    if(ssort.lstep == 0)
        ssort.generator = selectionsort_helper(arr);
    return ssort.generator.next().value;
}

/* create algo object to represent this algo */
const ssort = new Algo('SELECTION SORT');
ssort.sort_function = selectionsort;
ssort.generator;

