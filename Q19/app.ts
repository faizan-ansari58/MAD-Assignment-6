var input = prompt("Enter Number ")
var num :number=Number(input)

while(num<10)
{
    switch(num%10)
    {
    case 1:
        console.log("one");
        break
    case 2:
        console.log("two");
        break
    case 3:
        console.log("three");
        break
    case 4:
        console.log("four");
        break
    case 5:
        console.log("five");
        break
    case 6:
        console.log("six");
        break
    case 7:
        console.log("seven");
        break
    case 8:
        console.log("eight");
        break
    case 9:
        console.log("nine");
        break
    case 10:
        console.log("ten");
        break
    }
    num=num/10
}
