<template>
  <div class="hello">
    <h1>Welcome to Scrabble Score</h1>
    <input v-model="word" pattern="[a-z]*"/><button v-on:click="addToList">PLAY</button>
    <div v-if="isValidWord">
      <p>Your word gets you <strong v-text="scrabbleScore" /> scrabble points!</p>
      <ul>
        <li v-for="(letter, index) of letters" :key="index" class="scrabble-piece">{{letter}} <sub>{{letterScore(letter)}}</sub></li>
      </ul>
    </div>
    <p v-else>Invalid word</p>
    <ul>
      <li v-for="(playedWord, n) of reversedWords" :key="n" class="played-words">
        <ul>
        <li v-for="(letter, l) in playedWord" :key="l" class="scrabble-piece small">{{letter}} <sub>{{letterScore(letter)}}</sub></li>
        <span class="word-score">{{wordScore(playedWord)}}</span>
        </ul>  
      </li>
    </ul>
  </div>
</template>

<script>
import {
  scrabbleLetterScore, scrabbleWordScore
} from "../libs/Scrabble"

export default {
  name: 'Scrabble',
  data: function(){
    return { title:"lorem ipsum",
            showTitle: true,
            word: "", 
            words: [] 
            }
  },
  methods: {
    letterScore: scrabbleLetterScore,
    addToList: function(){
      this.words.push(this.word);
      this.word = "";
    },
    // Calling wordS calls scrab
    wordScore: scrabbleWordScore
  }, 
  computed: {
    letters: function() {
      return this.word.replace(/[^a-z]/ig, "").split("");
    },
    scrabbleScore: function(){
      return this.wordScore(this.word);
    },
    isValidWord: function() {
      return (/^[a-z]*$/i).test(this.word);
    },
    reversedWords: function(){
      return this.words.slice().reverse();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  &:invalid{
    border-color: red;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.scrabble-piece {
  background-color: #CBA882;
  color: #2B2520;
  font-family: 'News Cycle', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  // padding: 10px 19px;
  margin: 5px;
  font-size: 30px;
  box-shadow: 2px 2px 0px 2px rgba(203,168,130,0.7);
  border-radius: 3px;
  width: 80px;
  height: 80px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;

  sub {
    font-size: 15px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  &.small {
    width: 40px;
    height: 40px;
    font-size: 20px;

      sub {
        font-size:10px;
        position: absolute;
        bottom: 5px;
        right: 5px;
      }
  }
}

.word-score {
  margin: 20px;
  font-family: 'News Cycle', sans-serif;
  font-size: 20px;
  color: purple;
}

li.played-words {
  display: block !important;
}


</style>
