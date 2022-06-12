function receivesAFunction(callback) {
    return callback
}

receivesAFunction("allan", function spy() {})


function returnsANamedFunction(first, last) {
    return (`${first} + ${last}`)


}

receivesAFunction('allan', 'Ngoma')