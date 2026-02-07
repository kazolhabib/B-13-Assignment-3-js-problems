//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    let oldPrice = currentPrice;
    let discountPrice = discount;

    if(typeof oldPrice !== 'number'){
        return "Invalid";
    }
    if(typeof discountPrice !== 'number'){
        return "Invalid";
    }
    if(discountPrice < 0 || discountPrice > 100){
        return "Invalid";
    }

   let discountedPrice = (currentPrice * discount) / 100; 
   let latestPrice = currentPrice - discountedPrice;
   return latestPrice.toFixed(3);
}



//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
if(typeof otp !== "string"){
    return "Invalid"

}

if(otp.length === 8 && otp.startsWith("ph-")){
    return true
} else{
    return false
}}


//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
   
   const total = omr.right + omr.wrong + omr.skip;

   if(total !== 100) {
    return "Invalid"
    }

const rightAnswer = (omr.right * 1)
const wrongAnswer = (omr.wrong * 0.5)
const finalScore = rightAnswer - wrongAnswer

    return Math.round(finalScore);
}



//Problem-04: Upcoming Gono Vote
function gonoVote(array) {

    if(!Array.isArray(array)){
    return "Invalid"
    }

    let haVote = 0
    let naVote = 0

    for( const v of array ){
        if (v === "ha"){
            haVote += 1
        }
        if(v === "na"){
        naVote +=1
        }
    }

    if (haVote === naVote){
        return "equal"
    } else if(haVote > naVote){
        return true

    }else {
        return false
    }

}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(text) {
  
    if (typeof text !== "string" || text === "") {
        return "Invalid";
    }

    const words = text.split(" "); 
    const token = words.join("").length;

    let longestWord = words[0];    

    for (let i = 1; i < words.length; i++) {
       
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return {
        longwords: longestWord,
        token: token
    };
}





