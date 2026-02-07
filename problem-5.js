function analyzeText(str) {
if (typeof str !== "string"){
    return "Invalid"
}
const splitedText = str.split(" ")

console.log(splitedText);


for (s of splitedText){
    console.log(s.length);
    
}



}

analyzeText("I am a little honest person")