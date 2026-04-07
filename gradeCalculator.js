function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid input";
  }

  let grades;

  if (score >= 70) {
    grades = "A";
  } else if (score >= 60) {
    grades = "B";
  } else if (score >= 50) {
    grades = "C";
  } else if (score >= 40) {
    grades = "D";
  } else {
    grades = "F";
  }

  return grades;
}

// Usage
console.log(getGrade(85));
console.log(getGrade(32));
console.log(getGrade(22));
console.log(getGrade(59));