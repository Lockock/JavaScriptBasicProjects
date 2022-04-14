function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += myAdjective + " ";
    result += myNoun + " ";
    result += myVerb + " ";
    result += myAdverb + " ";

    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));
