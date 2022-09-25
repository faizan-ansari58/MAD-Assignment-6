var input = prompt("Enter a number ");
var num = Number(input);
console.log("Number is ", num);
var sum = 0;
while (num != 0) {
    sum = sum + num % 10;
    num = Math.floor(num / 10);
}
console.log("sum is ", Math.floor(sum));
