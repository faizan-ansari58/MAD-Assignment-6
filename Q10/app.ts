var num : any = prompt("Enter Number to count digits ")
console.log("Number is", num) 

var count=0

    
var i = 1;
while( ( num /= 10 ) >= 1 )
{
    i++ 
}
console.log("Number of Digits is " ,i)