/*
Merge sort algorithm using javascript

Time Complexity - O(nlog(n))
Space Complexity - O(n^2)

*/

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray){
    if (startIdx == endIdx){
        return
    }
    let middleIdx =Math.floor((startIdx + endIdx) /2)
    mergeSortHelper(auxiliaryArray,startIdx,middleIdx,mainArray)
    mergeSortHelper(auxiliaryArray,middleIdx+1 , endIdx, mainArray)

    doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray)
}

function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray){
    let k = startIdx
    let i = startIdx
    let j = middleIdx +1 
    while(i <= middleIdx  && j <= endIdx){
        if (auxiliaryArray[i] <= auxiliaryArray[j]){
            mainArray[k] = auxiliaryArray[i]
            i += 1
        }
        else{
            mainArray[k] = auxiliaryArray[j]
            j+=1
        }
        k += 1
    }
    while(i<= middleIdx){
        mainArray[k] - auxiliaryArray[i]
        i += 1
        k += 1
    }
    while(j<=endIdx){
        mainArray[k] = auxiliaryArray[i]
        i += 1
        k += 1
    }
}

function mergeSort(array){
    if (array.length <= 1){
        return array
    }
    let auxiliaryArray = array.slice()
    mergeSortHelper(array,0,array.length-1, auxiliaryArray)
    return array
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]))