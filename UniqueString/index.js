module.exports = function(a) {
    let hash = {};
    for(let c of a) {
        if(!hash[c]) hash[c] = 0;
        hash[c]++;
        if(hash[c] > 1) return false;
    }
    return true;
}