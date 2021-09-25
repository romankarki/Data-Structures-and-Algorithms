using System;

public class SelectionSort
{
    public static int[] SelectionSortArray(int[] arr)
    {
        var currentIndex = 0;
        while (currentIndex < arr.Length - 1)
        {
            var smallestIndex = currentIndex;
            for (var i = currentIndex + 1; i < arr.Length; i++)
            {
                if (arr[smallestIndex] > arr[i])
                {
                    smallestIndex = i;
                }
            }
            swap(currentIndex, smallestIndex, arr);
            currentIndex = currentIndex + 1;
        }
        return arr;
    }
    public static void swap(int i, int j, int[] arr)
    {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    public static void Main()
    {
        //time complexiy = O(n^2)
        //space complexity = O(1)
        int[] a = new int[] { 3, 2, 4, 5, 1, 12, 19, 11, 135, 22, 15 };
        var result = SelectionSortArray(a);
        //printing Results
        Console.WriteLine("[{0}]", string.Join(", ", result));
    }
}