class LinkedList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// o(n) time complexity with o(1) space complexity
function removeDuplicatesFromLinkedList(linkedList){
    let currentNode = linkedList;
    while(currentNode != null){
        let nextDistinctNOde = currentNode.next;
        while(nextDistinctNOde !== null && nextDistinctNOde.value === currentNode.value){
            nextDistinctNOde = nextDistinctNOde.next;
        }
        currentNode.next = nextDistinctNOde;
        currentNode = nextDistinctNOde;
    }
    return linkedList;
}


