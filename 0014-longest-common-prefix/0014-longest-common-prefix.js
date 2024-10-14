/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const minLength = Math.min(...strs.map((str) => str.length));
    
    let output = '';
    for (let i = 0; i < minLength; i++) {
        let char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return output;
            }
        }
        output += char;
    }

    return output
};