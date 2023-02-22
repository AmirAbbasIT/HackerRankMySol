function maxMin(k, arr) {
    arr=arr.sort((a,b)=>a-b);
    let minUnfairness=arr[k-1]-arr[0];
    for(let i=1;i<arr.length-k+1;i++){
      minUnfairness=Math.min(minUnfairness,arr[i+k-1]-arr[i])
    }
    return minUnfairness;
  
  }