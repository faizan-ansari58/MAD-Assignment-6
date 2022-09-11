var input = prompt("Enter Number to count digits ");
var num = Number(input);
var second;
second = num % 10;
while (num >= 10) {
    num = num / 10;
}
var first = Number(num);
console.log("First Number is", first);
console.log("Last Number is", second);
