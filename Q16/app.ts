var input :string | null = prompt("Enter any number")
var num:number = Number(input)
console.log("input is ", input)
var remainder:number
var reverse:number=0
while (num!=0)
{
    remainder=num%10
    reverse=reverse *10 + remainder
    num=Math.floor(num/10)
}
console.log("Reverse is ", reverse)