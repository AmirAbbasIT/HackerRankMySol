function sockMerchant(n, ar) {
    let socks={}
    for(let i=0;i<n;i++){
        let count=socks[ar[i]]
        if(count){
         socks[ar[i]]=count+1
        }else{
        socks[ar[i]]=1;
        }
    }
    let count=0;
    for(let [key,val] of Object.entries(socks)){
        count+=Math.floor(val/2)
    }
    return count;
}