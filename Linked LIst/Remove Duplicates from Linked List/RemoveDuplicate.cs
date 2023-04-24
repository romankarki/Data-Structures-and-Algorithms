public class Program
{
    public class LinkedList
    {
        public int value { get; set; }
        public LinkedList next { get; set; }

        public LinkedList(int value)
        {
            this.value = value;
            this.next = null;
        }
    }

    // o(n) time complexity with o(1) space complexity
    public LinkedList RemoveDuplicateFromLinkedList(LinkedList list)
    {
        var currentNode = list;
        while (currentNode != null)
        {
            LinkedList nextDistinceNode = currentNode.next;
            while (nextDistinceNode != null && nextDistinceNode.value == currentNode.value)
            {
                nextDistinceNode = nextDistinceNode.next;
            }
            currentNode.next = nextDistinceNode;
            currentNode = nextDistinceNode;
        }
        return list;
    }
    public static void Main(string[] arg)
    {

    }
}