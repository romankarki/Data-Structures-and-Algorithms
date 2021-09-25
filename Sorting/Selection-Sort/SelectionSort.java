import java.util.Arrays;

public class SelectionSort{
    public static int[] SelectionSortArray(int[] arr){
        int currentIndex = 0;
        while(currentIndex < arr.length -1){
            int smallestIndex = currentIndex;
            
            for(int i = currentIndex+1; i<arr.length  ;i ++){
                if(arr[smallestIndex] > arr[i]){
                    smallestIndex = i;
                }
                
            }
            swap(currentIndex, smallestIndex, arr);
            currentIndex = currentIndex +1;
        }
        
        return arr;
    }
    public static void swap(int i , int j, int[] arr){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String []args){
        //time complexiy = O(n^2)
        //space complexity = O(1)
        int[] a = new int[] {1,6,3,9,4,5,11};
        int[] b = SelectionSortArray(a);
        System.out.println(Arrays.toString(b));
    }
}