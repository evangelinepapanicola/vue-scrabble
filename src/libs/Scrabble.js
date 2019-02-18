const letterScores = {
    1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
    2: ["d","g"],
    3: ["b", "c", "m", "p"],
    4: ["f", "h", "v", "w", "y"],
    5: ["k"],
    8: ["j","x"],
    10: ["q","z"]
    }

    const scrabbleLetterScore = function(letter){
        let score = 0;
        for (let p of Object.keys(letterScores)){
              if (letterScores[p].indexOf(letter) > -1){
                score = score + parseInt(p);
              }
          }
        return score;
      }

    const scrabbleWordScore = function(word){
        let score = 0;
        for ( let letter of word.replace(/[^a-z]/ig, "").split("") ) {
          score += scrabbleLetterScore(letter);
        }
  
        return score;
      }

export {
    scrabbleLetterScore, scrabbleWordScore
}