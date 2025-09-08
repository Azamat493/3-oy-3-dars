let n1 = 5;
if (n1 > 0) {
  n1 = n1 + 1;
}
console.log("if1:", n1);

let n2 = -3;
if (n2 > 0) {
  n2 = n2 + 1;
} else {
  n2 = n2 - 2;
}
console.log("if2:", n2);

let n3 = 0;
if (n3 > 0) {
  n3 = n3 + 1;
} else if (n3 < 0) {
  n3 = n3 - 2;
} else {
  n3 = 10;
}
console.log("if3:", n3);

let a4 = 1, b4 = -2, c4 = 3;
let count4 = 0;
if (a4 > 0) count4++;
if (b4 > 0) count4++;
if (c4 > 0) count4++;
console.log("if4: musbat sonlar =", count4);


let a5 = -1, b5 = 0, c5 = 7;
let pos5 = 0, neg5 = 0;
if (a5 > 0) pos5++; else if (a5 < 0) neg5++;
if (b5 > 0) pos5++; else if (b5 < 0) neg5++;
if (c5 > 0) pos5++; else if (c5 < 0) neg5++;
console.log("if5: musbat =", pos5, ", manfiy =", neg5);


let a6 = 12, b6 = 8;
if (a6 > b6) {
  console.log("if6: kattasi =", a6);
} else {
  console.log("if6: kattasi =", b6);
}


let a7 = 9, b7 = 2;
if (a7 < b7) {
  console.log("if7:", a7, b7);
} else {
  console.log("if7:", b7, a7);
}


let a8 = 4, b8 = 6;
if (a8 > b8) {
  console.log("if8:", a8, b8);
} else {
  console.log("if8:", b8, a8);
}


let a9 = 7, b9 = 3;
if (a9 > b9) {
  let temp = a9;
  a9 = b9;
  b9 = temp;
}
console.log("if9: A =", a9, ", B =", b9);


let a10 = 5, b10 = 2;
if (a10 !== b10) {
  let sum = a10 + b10;
  a10 = sum;
  b10 = sum;
} else {
  a10 = 0;
  b10 = 0;
}
console.log("if10: A =", a10, ", B =", b10);