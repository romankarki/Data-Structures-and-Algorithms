"""
Insertion sort in python
Space complexity - O(1)
Time complexity - O(n^2)
"""


def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i
        while j > 0 and arr[j] < arr[j-1]:
            arr[j], arr[j-1] = arr[j-1], arr[j]
            j -= 1
    return arr


if __name__ == "__main__":
    print(insertion_sort([4, 6, 1, 7, 3, 19, 11]))
