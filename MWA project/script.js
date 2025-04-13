function calculateCGPA() {
    const marks = [
      parseFloat(document.getElementById("subject1").value),
      parseFloat(document.getElementById("subject2").value),
      parseFloat(document.getElementById("subject3").value),
      parseFloat(document.getElementById("subject4").value),
      parseFloat(document.getElementById("subject5").value),
    ];
  
    if (marks.some(isNaN)) {
      document.getElementById("result").textContent = "Please enter valid marks for all subjects.";
      return;
    }
  
    const totalGradePoints = marks.reduce((acc, mark) => acc + mark / 10, 0);
    const cgpa = (totalGradePoints / marks.length).toFixed(2);
  
    document.getElementById("result").textContent = `Your CGPA is: ${cgpa}`;
  }
  