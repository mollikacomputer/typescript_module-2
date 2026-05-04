// // module 2 video 11
// // maptype

// const arrayOfNum: number[] = [1, 4, 6];
// // নিচের জিনিস টা ম্যানুয়ালী না করে map এর মাধ্যমে করলে সহজ হয়
// // const arrayOfString: string[] = ["1", "4", "6"];

// const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
// console.log(arrayOfStringUsingMap);
// type AreaOfNum = {
//   height: number;
//   width: number;
// };
// type AreaOfString = {
//   height: string;
//   width: string;
// };

// const numbersArr: number[] = [25, 50, 70, 60, 62];
// const numArrConvertToStringArr: string[] = numbersArr.map((num) =>
//   num.toString(),
// );
// console.log("This number to string converting", numArrConvertToStringArr);

// *******map type*********
// type AreaOfNumber = {
//   height: number;
//   width: number;
// };

// type hight = AreaOfNumber["height"];
// // ম্যানুয়াল তৈরী করার নিয়ম
// type AreaOfString = {
//   hight: string;
//   width: number;
// };
// ম্যানুয়াল তৈরী না করে mapType এর মাধ্যমে তৈরী করব
// 1st level
// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };
// // 2nd next level ম্যানুয়ালী
// type AreaOfStringNextLevel = {
//   [key in keyof AreaOfNumber]: number;
// };
//3rd next level ডায়নামিক ভাবে
type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
  height: "30",
  width: 100,
};
