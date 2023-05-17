// version recursiva
// function binarySearch(array, item) {
    
//     function recurse(min, max){
        
//         let middle = Math.floor((min + max) / 2);

//         if(array[middle] === item){
//             return middle;
//         }

//         if(array[middle] > item){
//             return recurse(min, middle -1)
//         }

//         return recurse(middle + 1, max);
//     }

//     return recurse(0, array.length- 1);    
// }

// console.log(binarySearch([1,3,5,7,9,10,12,15,18,21,45,67,],7));
// console.log(binarySearch([1,3,5,7,9,10,12,15,18,21,45,67,],15));
// console.log(binarySearch([1,3,5,7,9,10,12,15,18,21,45,67,],21));
// console.log(binarySearch([1,3,5,7,9,10,12,15,18,21,45,67,],67));


// version iterativa--------------------------------------------------

// function binarySearchIter(list, element){
//     let min = 0;
//     let max = list.length -1;

// while (min <= max) {
//     let medio = Math.floor((min + max)/2);
//     let guess = list[medio];

//     if(guess === element){
//         return medio;
//     }

//     if(guess  >  element){
//         max = medio - 1;
//     }else{
//         min = medio + 1;
//     }
// }

// return -1;
// }

// console.log(binarySearchIter([1,3,5,7,9,10,12,15,18,21,45,67],67));
// console.log(binarySearchIter([1,3,5,7,9,10,12,15,18,21,45,67,],9));

// https://www.youtube.com/watch?v=-Moa_nM_pXY&ab_channel=LupoMontero

// NOT FOUD
// git---------------------------------------------------
function binarySearch(array, item) {

    let min = 0;
    let max = array.length - 1;
  
    while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let guess = array[middle];
  
      if (guess === item) {
        return middle;
      }
  
      if (guess > item) {
        max = middle - 1;
      }
      else {
        min = middle + 1;
      }
    }
  
    return -1;
  }
  
  
  console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 8)); // 5
  console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 7)); // -1