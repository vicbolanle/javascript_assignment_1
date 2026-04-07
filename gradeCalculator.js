// Grade Calculator
let scores = [80, 60, 85, 45, 55, 50, 63, 49, 22, 30];

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let letterGrade = '';

    if (score >= 70) {
        letterGrade = 'A';
    } else if (score >= 60) {
        letterGrade = 'B';
    } else if (score >= 50) {
        letterGrade = 'C';
    } else if (score >= 40) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    let result = `Score: ${score} → Grade: ${letterGrade}`;
    console.log(result);
}