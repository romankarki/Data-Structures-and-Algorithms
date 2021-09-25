// Selection sort in TypeScript
// time complexity = O(n^2)
// space complexity  = O(1)

export function SelectionSort(arr:number[]):number[]{
    
    let currentIndex = 0;
    while(currentIndex < arr.length -1){
        let smallestIndex = currentIndex;
        for(let i = currentIndex+1; i < arr.length; i++){
            if(arr[smallestIndex]>arr[i]){
                smallestIndex  = i;

            }
        }
        [arr[smallestIndex],arr[currentIndex]]= [arr[currentIndex],arr[smallestIndex]];
        currentIndex +=1;
    }
    return arr;
}

console.log(SelectionSort([4,3,21,1,4,11]));