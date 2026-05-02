//module 2.2
//interface; need repeat****8
//type elias is good
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Mr. X",
  age: 100,
};
const user2: User = {
  name: "Mr Y",
  age: 200,
};

console.log(user1);
console.log(user2);
// intersector দুইটা টাইপ একত্রিত করাকে type intersection বলে
type Role = {
  role: "admin" | "user";
};
type UserWithRole = User & Role;

const user3: UserWithRole = {
  name: "Mr. Z",
  age: 132,
  role: "admin",
};
console.log("UserWithRole type :", user3);

// interface শুধু অবজেক্ট এর সাথে কাজ করবে
// Array, object, function usable interface
interface IUser {
  name: string;
  age: number;
}

const user4: IUser = {
  name: "Mr Arman",
  age: 132,
};

console.log("intersector:", user4);
//***** extends টাইপ যুক্ত করা */
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user6: IUserWithRole = {
  name: "Mr. abcd",
  age: 510,
  role: "admin",
};
console.log(user6);
// type Add = (num1: number, num2: number) => number;
// // const add: Add = (num1, num2) => num1 + num2; এক লাইনে লিখলে রিটার্ন না লিখলেও চলে
// const add: Add = (num1, num2) => {
//   return num1 + num2;
// };

console.log("Add function here: ", add(25, 555));
interface IAdd {
  (num1: number, num2: number): number;
}
//use interface add function
const add: IAdd = (num1, num2) => {
  return num1 + num2;
};

// array is বিশেষ ধরনের Object ব্যাখ্যা করা হলো
interface IFriends {
  [index: number]: string;
}

// const friends: string[] = ["a", "b", "c", "d", "e"];
// //                  index [0      1    2    3    4]
const friends: IFriends = ["a", "b", "c", "d", "e"];
//                  index [0      1    2    3    4]
