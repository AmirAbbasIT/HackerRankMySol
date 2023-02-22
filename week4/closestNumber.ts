function closestNumbers(arr: number[]): number[] {
    arr=arr.sort((a,b)=>a-b);
    let minArr:number[]=[];
    let minDiff:number=Math.abs(arr[0]-arr[1]);
    minArr=[arr[0],arr[1]];
    for(let i=1;i<arr.length-1;i++){
      let diff=Math.abs(arr[i]-arr[i+1]);
      if(diff<minDiff){
        minDiff=diff;
        minArr=[arr[i],arr[i+1]]
      }else if(diff===minDiff){
        minArr.push(arr[i]);
        minArr.push(arr[i+1]);
      }
    }
  return minArr
  }