// module 2 video 10
// conditional type: কন্ডিশনের উপর নির্ভরশীল
// এটা বেশী কাজে লাগে না
type A = null;
type B = undefined;
type C = A extends null ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
  bike: "string";
  car: "string";
  ship: "string";
};

type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
type HasBike = checkVehicle<"car">;
