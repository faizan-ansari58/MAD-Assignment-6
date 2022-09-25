var input = prompt("Enter Number to count digits ");
var num = Number(input);
console.log("Number is", num);
var second;
second = num % 10;
while (num >= 10) {
    num = num / 10;
}
var first = num;
console.log("First Number is", Math.floor(first));
console.log("Last Number is", second);
