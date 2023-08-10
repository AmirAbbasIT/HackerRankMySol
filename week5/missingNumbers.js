function missingNumbers(arr=[7,2,5,3,5,3], brr=
    [7,2,5,4,6,3,5,3]) {
    let numbers={}
    let missing={};
    for(let i=0;i<arr.length;i++){
        if(numbers[arr[i]]){
            numbers[arr[i]]=numbers[arr[i]]+1;
        }else{
            numbers[arr[i]]=1;
        }
    }
    for(let i=0;i<brr.length;i++){
        if(numbers[brr[i]]){
          numbers[brr[i]]=numbers[brr[i]]-1;
        }else{
            missing[brr[i]]=brr[i];
        }
    }
    return Array.from(Object.keys(missing));
  }