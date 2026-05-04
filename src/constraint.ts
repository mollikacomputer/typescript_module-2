// module 2-6
//03/05/2026 5:45 pm
// constrainট: strict rules দেওয়া
/// anther example
type Student = { id: number; name: string; dateOfBirth: string; class: string };
const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return { courseName: "Next Level", ...studentInfo };
};

const student2 = {
  id: 1111,
  name: "Jhankar",
  hasCar: true,
  isMarried: true,
  dateOfBirth: "15/12/2000",
  class: "Ten",
};

const result6 = addStudentToCourse(student2);
console.log("student add next level project:", result6);
