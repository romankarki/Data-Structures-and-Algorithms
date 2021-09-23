// Bubble sort algorithm implemented in Javascript
// Time - O(n^2)
// Space - O(1)
function bubble_sort(array){
    for(let i = 0 ; i < array.length; i++){
        for (let j = 0 ; j < array.length-1; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubble_sort([5, 8, 7, 1, 3, 9]))