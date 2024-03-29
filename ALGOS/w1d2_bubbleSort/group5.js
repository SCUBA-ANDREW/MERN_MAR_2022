// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
function bubbleSort(nums) {
    // this version always runs o(n^2)
    for (let j = 0; j < nums.length; j++) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
            }
        }
    }
    return nums;
}


function bubbleSort2(nums) {
    while(true) {
        let swapped = false
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i+1]) {
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
                swapped = true
            }
        }
        if (!swapped) {
            break
        }
    }
    return nums
}

const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(nums1));
console.log(bubbleSort(nums2));
console.log(bubbleSort(nums3));

console.log(bubbleSort2(nums1));
console.log(bubbleSort2(nums2));
console.log(bubbleSort2(nums3));
// call the function and pass nums1, nums2, nums3
// [a, b] = [b, a]