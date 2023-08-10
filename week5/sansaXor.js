function sansaXor(arr = [3, 4, 5]) {
    let resultArr=[]
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        let res=arr.slice(i, j + 1);
        if(res.length>1){
          let r=res.reduce((prev,curr)=>prev^curr)
          resultArr.push(r);
        }else{
          resultArr.push(res[0])
        }
      }
    }
    return resultArr.reduce((prev,curr)=>prev^curr)
  }


///// Not Accepted for some case so optimizing it


function sansaXor(arr = [3, 4, 5]) {
    if(arr.length%2==0)
    return 0;
    
    let res=0;
    for(let i=0;i<arr.length;i+=2){
        res=res^arr[i]
    }
    return res;
  }