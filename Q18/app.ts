var input :string|null = prompt("Enter number")
var num :number = Number(input)
console.log("Input is ", num)
var freq:number=0
for(let i=0 ; i<10 ; i++)
{
    while (num!=0)
    {
        num=num%10
        if(Math.floor(num)==i)
        {
            freq++
        }
        num=Math.floor(num)  
    }
    console.log("Frequency of " ,i, "is " ,freq);
    
}