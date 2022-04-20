console.log(minimumNumber(5,50))
console.log(minimumNumber(5,0.5))
console.log(minimumNumber(-50,-5))
console.log(minimumNumber(5,'50'))

function minimumNumber(num1, num2){
    if(!(typeof(num1) === 'number') || !(typeof(num2) === 'number')){
        return "Function only accepts numbers"
    }
    else{
        return Math.min(num1, num2)
    }
}