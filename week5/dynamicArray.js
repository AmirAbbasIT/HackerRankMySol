function dynamicArray(n, queries) {
    let arr=[];
   for(let i=0;i<n;i++){
     arr[i]=[];
   }
   let lastAnswer=0;
   let ans=[]
   for(let i=0;i<queries.length;i++){
       let [q,x,y]=queries[i];
       switch(q){
           case 1:
           {
               let idx=((x^lastAnswer)%n)
               arr[idx].push(y)
           }
           break;
           case 2:
           {
               let idx=((x^lastAnswer)%n)
               lastAnswer= arr[idx][y%arr[idx].length]
               ans.push(lastAnswer)
               
           }
       }
       
   }
   
   return ans;
 
 }