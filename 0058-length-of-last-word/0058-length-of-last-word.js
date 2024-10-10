/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmedS = s.trim();
    const arr = trimmedS.split(' ');

    const lastItem = arr[arr.length - 1];

    return lastItem.length;
};