let palindromePermutation = function(str) {
    if(str.trim().length <= 1) return true;
    let hash = {};
    for(let c of str) {
        if(c === ' ') continue;
        if(!hash[c]) hash[c] = 0;
        hash[c]++;
    }
    let isOddDetermined = false;
    for(let prop in hash) {
        if((hash[prop] % 2) == 1) {
            if(!isOddDetermined) isOddDetermined = true;
            else return false;
        }
    }
    return true;
}
module.exports = {
    palindromePermutation
};