function rot13(message) {
  const result = message.split("").reduce((accumulator, currentValue) => {
    const charCode = currentValue.charCodeAt();
    console.log(typeof charCode);
    if (charCode === 32) {
      return accumulator + String.fromCharCode(charCode);
    }
    if (charCode > 64 && charCode < 91) {
      console.log(((charCode - 65 + 13) % (90 - 65 + 1)) + 65);
      const rotLetter = String.fromCharCode(
        ((charCode - 65 + 13) % (90 - 65 + 1)) + 65
      );
      return accumulator + rotLetter;
    }
    if (charCode > 96 && charCode < 123) {
      console.log(((charCode - 97 + 13) % (122 - 97 + 1)) + 97);
      const rotLetter = String.fromCharCode(
        ((charCode - 97 + 13) % (122 - 97 + 1)) + 97
      );
      return accumulator + rotLetter;
    }

    return accumulator + currentValue;
  }, "");
  return result;
}

console.log(rot13("test"));
