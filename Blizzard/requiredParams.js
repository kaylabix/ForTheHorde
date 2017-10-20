
function createCheckForParamsFunction(requiredParams) {
    return function(givenParams) {
        var missingParams = [];
        for (var i = 0; i < requiredParams.length; i++) {
            if (!(requiredParams[i] in givenParams)) {
                missingParams.push(requiredParams[i])
            }
        }
        return "You are missing paramaters: " + missingParams.join(',')
    }
}

var checkForUserParams = createCheckForParamsFunction(['firstName', 'lastName', 'address']);

console.log(checkForUserParams({firstName: 'Bob'}))