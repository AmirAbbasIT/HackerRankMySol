function matchingStrings(strings, queries) {
    let map={}
    let output=[];
    
    strings.forEach(s=>{
        if(map[s]){
            map[s]=map[s]+1;
        }else{
            map[s]=1;
        }
    })
    queries.forEach(q=>{
        let count=0;
        if(map[q]){
            count=map[q];
        }
        output.push(count)
    })
    
    return output;
}