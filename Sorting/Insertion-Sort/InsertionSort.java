import java.util.Arrays;
public class InsertionSort{
    
    public static int[] insertionSortArray(int[] arr){
        for(int i =1 ; i<arr.length; i++){
            int j = i;
            while(j > 0 && arr[j] < arr[j-1]){
                swap(j,j-1,arr);
                j = j -1;
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
        int[] a = new int[] {1,6,3,9,4,5,11};
        int[] b = insertionSortArray(a);
       System.out.println(Arrays.toString(b));
        
     }
}