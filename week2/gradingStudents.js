function roundGrade(marks=0){
    return (Math.ceil(marks/5)*5)
}
function gradingStudents(grades) {
    
    for(let i=0;i<grades.length;i++){
        if(grades[i]>=38){
            let rounded=roundGrade(grades[i])
            if(rounded-grades[i]<3){
                grades[i]=rounded;
            }
        }
    }
    return grades;
}