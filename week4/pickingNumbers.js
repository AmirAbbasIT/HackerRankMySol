function pickingNumbers(arr) {
    let maxLength = 1;
    arr=arr.sort((a,b)=>a-b)
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i+1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) <= 1) {
                count++;
            }
            
        }
        if (count > maxLength) maxLength = count;
    }
    return maxLength;
}