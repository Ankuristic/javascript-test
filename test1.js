function common_substring(arr1){
    var arr = arr1.concat().sort();
    a1= arr[0], a2=[arr.length-1],L=a1.length,i=0;
    while(i<L&&a1.charAt(i)===a2.charAt(i))
    i++;
    return a1.subString(0,i)
}
console.log(common_substring('ankur'));


function listofInteger(arr, target){
    let arr1, arr2;

    // if(k==0 && i== arr.length){

    // }
     arr = arr1+arr2;
    return  arr+target;

}