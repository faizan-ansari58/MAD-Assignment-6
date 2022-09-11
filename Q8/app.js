var input = prompt("Enter number upto which you want to add ");
var num = Number(input);
var sum = 0;
for (var i = 1; i <= num; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
}
console.log("Sum is", sum);
