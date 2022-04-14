function gradingStudents(grades) {
  let arrayOfRoundedNumbers = [];
  let xArray = [];

  function roundNumber(num) {
    if (num < 38) return num;
    const roundedNum = Math.ceil(num / 5) * 5;
    return roundedNum;
  }
  grades.map((grade) => {
    const roundedNumber = roundNumber(grade);
    xArray.push(roundedNumber);
  });

  function rounder() {
    for (var i = 0; i <= grades.length - 1; i++) {
      if (xArray[i] - grades[i] < 3) {
        arrayOfRoundedNumbers.push(xArray[i]);
      } else {
        arrayOfRoundedNumbers.push(grades[i]);
      }
    }
  }

  rounder();
  return arrayOfRoundedNumbers;
}

const grades = [4, 73, 67, 38, 33];

console.log(gradingStudents(grades));
