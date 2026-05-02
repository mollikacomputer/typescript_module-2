// module 2 video no 3
// 2.3 date: 02/05/2026 time: 8:56pm
// dynamically generalize
// type GenericArray<value> = Array<value>;
// typescript এ প্যারামিটারের মত T ব্যবহার করে
type GenericArray<T> = Array<T>;
// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
// const rollNumbers: number[] = [4, 7, 11];
// const isEligibleList: bolean[] = [true, false, true];

// different way অন্যভাবে উপরেরগুলো প্রকাশ করা যায়
// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
// const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];
// const isEligibleList: bolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["30", "50"];

// generic use for array of object
const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr Yxz",
    age: 35,
  },
];
