function validBraces(braces){
    console.log(braces);
    let stack = [];
    const bracesPair = {
      '}': '{',
      ')': '(',
      ']': '['
    }
    
    for (let i of braces) {
      if (stack.slice(-1).join('') === bracesPair[i]) {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
      
    return stack.length === 0;
}
