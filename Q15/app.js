var input = prompt("Enter any number ");
var num = Number(input);
console.log("num%10 ", num % 10);
console.log("num/10 ", num / 10);
var product = 1;
while (num != 0) {
    product = product * (num % 10);
    num = Math.floor(num / 10);
}
console.log("num ", num);
console.log("Product of digits is ", Math.floor(product));
