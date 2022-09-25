var input = prompt("Enter any number");
var num = Number(input);
var number = num;
console.log("input is ", input);
var remainder;
var reverse = 0;
while (num != 0) {
    remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10);
}
if (reverse == number) {
    console.log("Number is Palindrome ", reverse);
}
else {
    console.log("Number is Not Palindrome ", reverse);
}
