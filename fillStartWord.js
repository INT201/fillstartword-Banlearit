const {template} = require('@babel/core')

function fillStartWord(startWord, word) {
    // code here
    if (word == null || undefined){
        return undefined
    }else if(startWord === word.slice(0,startWord.length)){
        return word;
    }else if (word){
        return startWord + word;
    }
}
// test vscode 
module.exports = fillStartWord




