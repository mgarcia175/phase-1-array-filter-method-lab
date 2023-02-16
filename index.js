// Code your solution here
function findMatching(drivers, string) {
    const matching = drivers.filter(match)
    function match(name) {
    if (string === name) {
        return true
    } else if (string.toLowerCase() === name.toLowerCase()) {
        return true
    } else {
        return false
    }} return matching
}

function fuzzyMatch(drivers, string) {
    const matching = drivers.filter(match)
    function match(name) {
        if (string.charAt(0) === name.charAt(0)) {
            return true
        } else {
            return false
        }
    } return matching
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
    // const matching = drivers.filter(match)
    // function match(driver) {
    //     if (driver.name === string) {
    //         return true
    //     } else {
    //         return false
    //     }
    // } return matching
}