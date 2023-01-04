function breakingRecords(scores) {
    let minCount=0,maxCount=0,min=scores[0],max=scores[0];
    scores.forEach(score=>{
    if(min===max && max===score){
        return;
    }
    if(score > max){
        max=score;
        maxCount++;
    }
    if(score < min){
        min=score;
        minCount++;
    }
})
return [maxCount,minCount]
}