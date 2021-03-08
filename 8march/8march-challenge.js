//Daily challenges 

// 1 - UEFA EURO 2016

function uefaEuro2016(teams, scores){
  let teamOne = scores[0]
  let teamTwo = scores[1]
  if (teamOne > teamTwo){
 return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  }else if(teamOne < teamTwo) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  }else{
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }

}

//2 Pre-FizzBuzz Workout #1
function preFizz(n) {
let array = []
for (let i = 1; i <= n; i++){
  array.push(i)
}
  return array
}

