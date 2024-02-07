function getMaxScoreStudent(students) {
  let sortedStudentsByScore = students.sort((a, b) => {
    return b.score - a.score;
  });

  let maxScore = sortedStudentsByScore[0].score;

  let maxScoreStudents = students.filter((student) => {
    return student.score === maxScore;
  });

  if (maxScoreStudents.length === 1) {
    console.log(
      `Congratulations, ${maxScoreStudents[0].name}! You have max score points: ${maxScore}.`
      
    )
    return maxScoreStudents;
  } else {
    let earlierDate = getEarlierDate(maxScoreStudents);
    let maxScoreStudentsWithEarlierDate = maxScoreStudents.filter((student) => {
      return student.date === earlierDate;
    });
    console.log(
      `Congratulations, ${maxScoreStudentsWithEarlierDate[0].name}! You have max score points: ${maxScore} and earliest date: ${earlierDate}`
    )
    return maxScoreStudentsWithEarlierDate;
  }
}

function getEarlierDate(students) {
  let sortedStudentsArr = students.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  let earlierDate = sortedStudentsArr[0].date;
  return earlierDate;
}



module.exports = [getMaxScoreStudent, getEarlierDate]
