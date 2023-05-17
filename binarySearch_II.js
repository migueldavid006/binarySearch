const array = [1,3,5,7,9,10,12,15,18,21,45,67];

function binarySearch(array, item){
    let inicio = 0; 
    let fin = array.length -1; 
    
    while (inicio <= fin) {
        let middle = Math.floor((inicio + fin) /2)

        if(array[middle] === item){
            return middle;
            } else if(array[middle < item ]){
            inicio = middle + 1;
            } else {
            fin = middle - 1;
            }
            
            return -1;
}

}
console.log(binarySearch(array,15));
