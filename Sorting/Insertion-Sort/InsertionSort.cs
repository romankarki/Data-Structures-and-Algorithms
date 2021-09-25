using System;

public class InsertionSort
{
    public static int[] InsertionSortArray(int[] arr)
    {
        for (var i = 1; i < arr.Length; i++)
        {
            var j = i;
            while (j > 0 && arr[j] < arr[j - 1])
            {
                swap(j, j - 1, arr);
                j = j - 1;
            }
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
        int[] a = new int[] { 3, 2, 4, 5, 1, 12, 19, 11 };
        var result = InsertionSortArray(a);
        //printing Results
        Console.WriteLine("[{0}]", string.Join(", ", result));
    }
}