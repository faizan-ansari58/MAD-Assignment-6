var input : string |null = prompt("Enter Number to count digits ")
var num:number=Number(input)
console.log("Number is" , num)
var second
second=num%10;
while(num>=10)
{
    num=num/10
}
var first : number = num;

console.log("First Number is" , Math.floor(first))

console.log("Last Number is" , second)