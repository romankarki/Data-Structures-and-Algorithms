import java.util.Arrays;
public class HelloWorld{
    public static int[] BubbleSort(int[] arr){
        for(int i = 0 ; i< arr.length ; i ++ ){
            for (int j = 0; j < arr.length -1 ; j++){
                if (arr[j] > arr[j+1]){
                    swap(j,j+1,arr);
                }
            }
        }
        return arr;
    }
    
    public static void swap(int i , int j, int[] arr){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

     public static void main(String []args){
        // Time - O(n^2)
        // Space - O(1)
        int[] a = new int[] {1,6,3,9,4,5,11};
        int[] b = BubbleSort(a);
       System.out.println(Arrays.toString(b));
        
     }
}