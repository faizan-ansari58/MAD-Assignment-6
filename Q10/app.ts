var input : string | null = prompt("Enter Number to count digits ")
var num1 : number = Number(input)
console.log("Number is", num1) 

var count=0

    
var i = 1;
while( ( num1 /= 10 ) >= 1 )
{
    i++ 
}
console.log("Number of Digits is " ,i)