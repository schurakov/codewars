function toCamelCase(str){
    let result = '';
    let upperCase = false;
    for (let letter of str) {
      if (letter.match(/[a-z0-9]/gi)) {
        result += upperCase ? letter.toUpperCase() : letter;
        upperCase = false
      } else {
        upperCase = true;
      }
    }
    return result;
}

module.exports = { toCamelCase };