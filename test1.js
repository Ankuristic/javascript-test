function common_substring(arr1){
    var arr = arr1.concat().sort();
    a1= arr[0], a2=[arr.length-1],L=a1.length,i=0;
    while(i<L&&a1.charAt(i)===a2.charAt(i))
    i++;
    return a1.subString(0,i)
}
console.log(common_substring('ankur'));

//Implement a JS function that takes a list of integers and a target number as input, and returns a array of two integers that add up to the target number.
function listofInteger(arr, target){
    for(let i = 0; i <= nums.length; i++){
        for(let j = 0; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }

}