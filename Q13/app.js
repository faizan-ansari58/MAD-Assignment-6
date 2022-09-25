var input = prompt("Enter input value");
console.log("Entered value is ", input);
var num = Number(input);
var last = num % 10;
while (num >= 10) {
    num = num / 10;
}
var first = Math.floor(num);
console.log("first digit is ", first);
console.log("last digit is ", last);
var temp;
temp = first;
first = last;
last = temp;
console.log("After swapping first is ", first);
console.log("After swapping last is ", last);
