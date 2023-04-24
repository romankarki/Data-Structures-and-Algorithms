class LinkedList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

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


