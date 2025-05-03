function myInfo() {
    console.log("My name is John Doe");
    console.log("I am a software developer");
    console.log("I love coding and learning new technologies");
}

myInfo();

function doubleIt(num) {
    result= num * 2;
    console.log(result);
}

doubleIt(5);

function Addition(num1, num2) {
    result = num1 + num2;
    console.log(result);
}
Addition(5, 10);

//function with return value---------------------------------------

function oddEven(number){
    if (number % 2==0){
        return true;
        }
    else{
        return false;
    }
}
console.log(oddEven(5));
console.log(oddEven(10));




function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumArray(numbers));