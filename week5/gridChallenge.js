function gridChallenge(grid) {
    
    for(let i=0;i<grid.length;i++){
        grid[i]=grid[i].split("").sort();
    }
    for(let i=0;i<grid.length;i++){
        for(let j=1;j<grid.length;j++){
            if(grid[j][i]<grid[j-1][i]){
                return "NO"
            }
        }
    }
    return "YES";

}