function* poresort_helper(arr){
    let even = true; // start with even indicies
    let n = arr.length;
    let change = false;
    while(1){
        psort.total_steps++;
        change = false;
        for(let x = 0, y = 1; x < n-1; x+=2, y+=2){
            psort.total_steps++; // count steps
            // even pass
            if(arr[x] > arr[x+1]){
                psort.total_steps++;
                [arr[x], arr[x+1]] = [arr[x+1], arr[x]]; // swap
                change = true;
            }
            // odd pass, less restricted, check bounds
            if(y >= n-1) continue;
            if(arr[y] > arr[y+1]){
                psort.total_steps++;
                [arr[y], arr[y+1]] = [arr[y+1], arr[y]]; // swap
                change = true;
            }
        }
        if(!change) break;
        yield arr; // full pass
    }
    psort.sorted = true;
}

/* generator entry */
function poresort(arr){
    if(psort.lstep == 0)
        psort.generator = poresort_helper(arr);
    return psort.generator.next().value;
}

/* create algo object to represent this algo */
const psort = new Algo('GOLD\'S PORE SORT');
psort.sort_function = poresort;
psort.generator;