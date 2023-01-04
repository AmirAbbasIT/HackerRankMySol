function countingValleys(stepsCount, path) {
    let count = 0;
    let steps = []
    for (let i = 0; i < path.length; i++) {

        if (steps.length) {
            if (steps[steps.length - 1] !== path[i]) {
                steps.pop();
                if (path[i] === 'U' && steps.length == 0)
                    count++;
                continue;
            }
        }
        steps.push(path[i])
    }
    
    return count;

}