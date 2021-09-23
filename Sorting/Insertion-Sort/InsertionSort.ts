// Insertion sort using TypeScript
// space complexity - O(1)
// Time Complexity - O(n^2)

export function insertionSort(arr:number[]):number[]{
    for(let i = 0; i< arr.length; i++){
        let j = i;
        while (j > 0 && arr[j] < arr[j-1]){
            //swap the values
            [arr[j],arr[j-1]]  = [arr[j-1],arr[j]];
            j -= 1;
        }
    }
    return arr;
}

console.log(insertionSort([2,6,3,4,1,11,17,10]));