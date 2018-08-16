module.exports = function(a, b) {
    if(a.length != b.length) return false;

    let hash = {};
    for(let x of a) {
        if(!hash[x]) hash[x] = 0;
        hash[x]++;
    }

    for(let x of b) {
        if(!hash[x]) return false;
        hash[x]--;
    }

    for(let prop in hash) {
        if(hash[prop] > 0) return false;
    }

    return true;
}