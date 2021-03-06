/* check if an array is sorted */
const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);

/*
    rotate array clockwise 
    usage: arr.rotate();
*/
Array.prototype.rotate = function() {
    let first = this.shift();
    this.push(first);
}