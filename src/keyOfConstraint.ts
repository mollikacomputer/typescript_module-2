//module 2-7
// 03/05/2026 6:24 pm
// need repeat
type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
// একটা টাইপ  এর key নিয়া অন্য একটা key তৈরী করা
type MyVehicle2 = keyof RichPeoplesVehicle;
type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 123,
  name: "Razzak",
  address: {
    city: "Madaripur",
  },
};

// // const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const myAddress = user["address"];

// console.log(myId, myName, myAddress);
const product = {
  brand: "HP",
};
const getPropertyFromObject = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result = getPropertyFromObject(user, "id");
console.log(result);
