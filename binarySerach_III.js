function binarySearch(arr, l ,r ,x) {
    if( l > r ) return - 1;

    const m = Math.floor((l+r)/2);

    if(arr[m] === x) return m;

    if(arr[m] < x){
        return binarySearch(arr, m+1,r,x);
    }else{
        return binarySearch(arr, l, m-1,x)
    }
}

const arr = [1,2,4,6,7,9,12,13,15,17,18,20,26,36,88]

console.log(binarySearch(arr,0,arr.length-1,88));



// https://www.youtube.com/watch?v=79I-zJsrp4Q&t=622s&ab_channel=VidaMRR-Programacionweb