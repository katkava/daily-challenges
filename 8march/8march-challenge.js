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
