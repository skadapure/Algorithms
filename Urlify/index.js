module.exports = function(str, n) {
    let result = [];
    for(let i = 0; i < n; i++) {
        console.log(str[i]);
        if(str[i] === ' ') result.push("%20");
        else result.push(str[i]);
    }
    //console.log(result.join(''));
    return result.join('');
}