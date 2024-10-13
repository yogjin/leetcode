/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    } 

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (i < s.length - 1) {
            if (s[i] === 'I') {
                if (s[i+1] === 'V') {
                    result += 4;
                    i++;
                    continue;
                }
            }
            if (s[i] === 'I') {
                if (s[i+1] === 'X') {
                    result += 9;
                    i++;
                    continue;
                }
            }
            if (s[i] === 'X') {
                if (s[i+1] === 'L') {
                    result += 40;
                    i++;
                    continue;
                }
            }
            if (s[i] === 'X') {
                if (s[i+1] === 'C') {
                    result += 90;
                    i++;
                    continue;
                }
            }
            if (s[i] === 'C') {
                if (s[i+1] === 'D') {
                    result += 400;
                    i++;
                    continue;
                }
            }
            if (s[i] === 'C') {
                if (s[i+1] === 'M') {
                    result += 900;
                    i++;
                    continue;
                }
            }
        }

        result += roman[char];
    }
    return result
};