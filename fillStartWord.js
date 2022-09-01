const {template} = require('@babel/core')

function fillStartWord(startWord, word) {
    // code here
    if (word == null){
        return undefined
    }else if(startWord === word.slice(0,startWord.length)){
        return word;
    }else if (word){
        return startWord + word;
    }

}

module.exports = fillStartWord




