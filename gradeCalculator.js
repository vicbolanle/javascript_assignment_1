// grade calculator using ifelse statement

function getGrade(score) {
    if (score < 0 || score > 100 || isNaN(score)) {
        return "Invalid input";
    }

    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log(getGrade(85));
console.log(getGrade(50));


//// grade calculator using switch statement

function getGradeSwitch(score) {
    if (score < 0 || score > 100 || isNaN(score)) {
        return "Invalid input";
    }

    let gradeRange = Math.floor(score / 10);

    switch (gradeRange) {
        case 10:
        case 9:
            return "A";
        case 8:
            return "B";
        case 7:
            return "C";
        case 6:
            return "D";
        default:
            return "F";
    }
}

console.log(getGradeSwitch(92));