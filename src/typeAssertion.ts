// // module 2-1 date:02/05/2026 time: 7:11 pm
// // type Assertion টাইপ স্ক্রিপট থেকে বেশী বোঝা
// let anything: any;
// anything = 222;
// anything as number;

const kgToGramConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return `Converted number output is: ${input} * 1000`;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted string output is: ${Number(value) * 1000}`;
  } else {
    return "invalid input value";
  }
};

const result1 = kgToGramConverter(2) as number;
const result2 = kgToGramConverter("2 kg") as string;
const result3 = kgToGramConverter("  ");

console.log("input number result:", result1);
console.log("input string value:", result2);
console.log("invalid input:", result3);

// extra thinking
type CustomError = {
  message: string;
};
try {
} catch (err) {
  console.log((err as CustomError).message);
}
