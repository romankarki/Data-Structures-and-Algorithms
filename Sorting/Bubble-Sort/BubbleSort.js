// Bubble sort algorithm implemented in Javascript

function bubble_sort(array){
    for(let i = 0 ; i < array.length; i++){
        for (let j = 0 ; j < array.length; j++){
            if(array[j] > array[j+1] && j != array.length){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubble_sort([5, 8, 7, 1, 3, 9]))