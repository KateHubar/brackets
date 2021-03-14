module.exports = function check(str, bracketsConfig) {
    const bracketPairs = bracketsConfig.reduce(
        (pairs, curr) => {
            pairs.openBracket[curr[0]] = curr[1];
            pairs.closeBracket[curr[1]] = curr[0];
            return pairs;
        },
        { openBracket: {}, closeBracket: {} }
    );

    const bracketStack = [];
    return (
        !str.split("").some((ch) => {
            if (bracketPairs.openBracket[ch]) {
                if (
                    bracketPairs.openBracket[ch] !==
                        bracketPairs.closeBracket[ch] ||
                    bracketStack[bracketStack.length - 1] !==
                        bracketPairs.openBracket[ch]
                ) {
                    bracketStack.push(ch);
                    return false;
                }
            }
            var last = bracketStack.pop();
            if (bracketPairs.closeBracket[ch] === last) return false;
            return true;
        }) && !bracketStack.length
    );
};
