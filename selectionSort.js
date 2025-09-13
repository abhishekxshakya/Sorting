const selectionSort = function(nums){
    let n = nums.length;

    for(let i=0; i<n-1; i++){
        let min = i;
        for(let j=i+1; j<n; j++){
            if(nums[j] < nums[min]){
                min = j;
            }
        }
        if(min != i){
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
    return nums;
}

let arr = [8, 1, 7, 3, 2, 9, 6];
const result = selectionSort(arr);
console.log(result); 