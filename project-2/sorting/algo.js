class Algo{
    constructor(i, s){
        this.idx = i;
        this.start = s;
        this.lstep = 0;
        this.sorted = false;
        this.sort_function = new Function();
        this.arr = [];
    }
    step() {
        this.sort_function(this.arr);
        this.lstep++;
    }
}