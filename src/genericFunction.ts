// //module 2.5
// // date 03/05/2026
// // genericFunction
// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];
// // const createArrayWithUserObject = (value:object)=> return [value];
// const createArrayWithUserObject = (value: { id: number; name: string }) => {
//   return [value];
// };

// const arrString = createArrayWithString("Apple");
// const arrNumber = createArrayWithNumber(242);
// const arrObj = createArrayWithUserObject({
//   id: 12345,
//   name: "Next Level Programming hero",
// });
//7:26 second
const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};
// 1st way
const createArrayWithTuple = (param1: string, param2: number) => [
  param1,
  param2,
];
//2nd way
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];
const result1 = createArrayTupleWithGeneric("Dipa Rani Roy", 2300);
const result2 = createArrayTupleWithGeneric("Shipon Kumar", false);
const result3 = createArrayTupleWithGeneric(3000, { name: "Ranjit", roll: 15 });
console.log("result 3 is here:", result1, result2, result3);

/// anther example
const addStudentToCourse = <T>(studentInfo: T) => {
  return { courseName: "Next Level", ...studentInfo };
};

const student1 = {
  id: 123,
  name: "Sabuj",
  hasPen: true,
};
const student2 = {
  id: 1111,
  name: "Jhankar",
  hasCar: true,
  isMarried: true,
};

// const result4 = addStudentToCourse(student1);
// console.log("student add next level project:", result4);
const result5 = addStudentToCourse(student2);
console.log("student add next level project:", result5);
