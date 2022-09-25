var input:string | null =prompt("Enter input value")
console.log("Entered value is ", input);

var num : number=Number(input)
var last = num%10
while (num>=10)
{
    num=num/10
}
var first :number = Math.floor(num);
console.log("first digit is ",first);
console.log("last digit is ",last);
var temp :number ;
temp = first; 
first = last;
last = temp;
console.log("After swapping first is ",first);

console.log("After swapping last is ",last);
