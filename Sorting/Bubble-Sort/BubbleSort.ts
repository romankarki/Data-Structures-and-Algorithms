//Bubble sort in typescript
// space - o(1)
// time - o(n^2)

export function bubbleSort(array: number[]):number[]{
    for(let i = 0;i< array.length; i++){
        for(let j=0; j<array.length-1;j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]];
            }
        }
    }
    return array;
}
console.log(bubbleSort([2,4,6,1,9,3]));