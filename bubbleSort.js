const bubbleSort  = function(nums){
    let n = nums.length;
    for(let i = 0; i<n-1; i++){
        let isSwapped = false;
        
        for(let j = 0; j<n-1-i; j++){
            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }

            isSwapped = true;
        }

        if(!isSwapped){
            break;
        }
    }
    return nums;
}

let arr = [1, 8, 2, 6, 9, 7, 2, 10];
const result = bubbleSort(arr);
console.log(result);