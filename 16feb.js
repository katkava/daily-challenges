//Daily challenges 

// 1 - Multiply

function multiply(a, b){
  let product = a * b
  return product
}

// 2 - Even or add
function even_or_odd(number) {
  if (number%2===0){
    return "Even"
}else{

return "Odd"}
  // ...
}

//3 Convert a boolean to a string 

function booleanToString(b){
 
  return b.toString()
}

//4 Sum of positive 
function positiveSum(arr) {
 
  let sum = arr.reduce(((a, b) => b > 0 ? b + a : a), 0);
 
  return sum

}

//5 remove string spaces 

function noSpace(x){
  return x.split(' ').join('')
  }

 // 6 reversed strings 

 function solution(str){
  let splitStr = str.split("")
  let reverseStr = splitStr.reverse()
  let joinStr = reverseStr.join("")
  return joinStr
}

//7 Opposite number

function opposite(number) {
  return -number
}

//8 Counting sheep...
function countSheeps(arrayOfSheep){
  let num = 0 
  for (let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] == true)
      num++ }
    return num 
    }

// 9 Remove First and Last Character

function removeChar(str){
  return str.slice(1, str.length-1)
 //You got this!

};

//10 Get the mean of an array

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
   let mean = marks.reduce((a, c) => a + c, 0)/marks.length 
   return Math.floor(mean)
}

// 11 Basic traingin: add item to an array 

websites.push("codewars")

// 12 FIXME: Replace all dots
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

// 13 String repeat 

function repeatStr (n, s) {
  return s.repeat(n);
}