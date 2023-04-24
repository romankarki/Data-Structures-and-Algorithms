class LinkedList {
    constructor(value){
        this.value = value;
        this.next  =null;
    }
}

function middleNode1(linkedList){
    let slowNode = linkedList;
    let fastNode = linkedList;
    while(fastNode !== null && fastNode.next !== null){
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    return slowNode;
}

function middleNode2(linkedList){
    let middleNode = linkedList;

    let count = 0;
    while(linkedList.next !== null){
        count++;
        middleNode.next;
    }
    middleNode=linkedList;
    for(let i =0; i< Math.floor(count/2); i++){
        middleNode = middleNode.next;
    }
    return middleNode;
}