namespace Sorting
{
    public static int[] BubbleSort(int[] arr)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            for (int j = 0; j < arr.Length - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    swap(j, j + 1, arr);
                }
            }
        }
        return arr;
    }
    public static void swap(int i, int j, int[] array)
    {
        int temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    public static void PrintArray(int[] arr)
    {

        Console.WriteLine("[{0}]", string.Join(", ", arr));
    }
    public static void Main()
    {
        // Time - O(n^2)
        // Space - O(1)
        var a = BubbleSort(new int[] { 1, 9, 18, 5, 10, 3, 4 });
        PrintArray(a);
    }
}