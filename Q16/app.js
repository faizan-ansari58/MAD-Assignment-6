var input = prompt("Enter any number");
var num = Number(input);
console.log("input is ", input);
var remainder;
var reverse = 0;
while (num != 0) {
    remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10);
}
console.log("Reverse is ", reverse);
