// Using types
const add = (n1: number, n2: number, s1: string, b1: boolean): number => {
  if (b1) {
    console.log(s1);
  }
  return n1 + n2;
};

const number1: number = 5;
const number2: number = 2.8;
const text: string = "WOHOO";
const isTrue: boolean = true;

const result = add(number1, number2, text, isTrue);
console.log(result);
