///Check how many characters to be replaced if we split string in half and to make them angrams
function anagram(s='aaaaabbbbbbh') {
    if(s.length%2!==0){
      return -1
    }
    
    let firsthalf=s.substring(0,s.length/2);
    let secondHalf=s.substring(s.length/2);
    
    let dict={}
    let count=0;
    for(let i=0;i<secondHalf.length;i++){
      if(dict[secondHalf[i]]){
        dict[secondHalf[i]]=dict[secondHalf[i]]+1;
      }else{
        dict[secondHalf[i]]=1;
      }
    }
    for(let i=0;i<firsthalf.length;i++){
      if(dict[firsthalf[i]]){
        dict[firsthalf[i]]=dict[firsthalf[i]]-1;
      }else{
        count++;
      }
    }
    return count;
    }