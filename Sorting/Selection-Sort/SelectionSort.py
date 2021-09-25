"""
Selection sort using python
Time Complexity - O(n^2)
Space Complexity - O(1)
"""


def selection_sort(arr):
    current_index = 0
    while current_index < len(arr) - 1:
        smallest_index = current_index
        for i in range(current_index + 1, len(arr)):
            if arr[smallest_index] > arr[i]:
                smallest_index = i
        [arr[current_index], arr[smallest_index]] = [
            arr[smallest_index], arr[current_index]]
        current_index += 1

    return arr


if __name__ == "__main__":
    print(selection_sort([2, 3, 1, 8, 5, 4, 11, 9, 19, 12]))
