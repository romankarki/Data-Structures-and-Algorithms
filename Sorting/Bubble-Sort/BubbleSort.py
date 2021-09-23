"""
Bubble sort implemented in python
 Time complexity - O(n^2)
 Space complexity - O(1)
"""


def bubble_sort(array):
    array_length = len(array) - 1
    for j in range(0, array_length):
        for i in range(0, array_length):
            if array[i] > array[i+1] and i != array_length:
                array[i], array[i+1] = array[i+1], array[i]
    return array


if __name__ == "__main__":
    print(bubble_sort([5, 8, 7, 1, 3, 9]))
