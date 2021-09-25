//Selection sort in javascript
// Time complexity =  O(n^2)
// Space Complexity = O(1)

function SelectionSort(arr){
    currentIndex = 0;
    while( currentIndex < arr.length-1){
        smallestIndex = currentIndex;
        for(let i = currentIndex + 1; i < arr.length; i++){
            if (arr[smallestIndex] > arr[i]){
                smallestIndex = i;
            }
        }
        //swap the values in either case of being same or different elements
        [arr[smallestIndex],arr[currentIndex]] = [arr[currentIndex],arr[smallestIndex]];
        currentIndex +=1
    }
    return arr;
}

console.log(SelectionSort([2, 3, 1, 8, 5, 4, 11, 9, 19, 12]));