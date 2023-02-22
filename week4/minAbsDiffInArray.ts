function minimumAbsoluteDifference(arr: number[]): number {
    let minDiff=Number.POSITIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(Math.abs(arr[i]-arr[j])<minDiff){
                
                minDiff=Math.abs(arr[i]-arr[j]);
            }
        }
    }
    return minDiff;
}