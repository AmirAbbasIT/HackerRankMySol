function separateNumbers(s: string): void {
    let i=0
    let max=s.length/2;
    while(i<max){
    let start:string =s.substr(0,i+1);
    let c:string =s.substr(0,i+1);
    let prev:bigint=BigInt(start);
    while(start.length<s.length){
     prev=prev + BigInt(1); 
     start+=prev.toString();      
    }
    if(start===s && s.length>1){
     console.log(`YES ${c}`)
     return
    }
    i++;
    }
    console.log(`NO`)
  }