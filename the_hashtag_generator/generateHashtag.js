function generateHashtag(str) {
  let result = false;

  normalize = str
    .split(" ")
    .filter((item) => {
      if (item) {
        return item;
      }
    })
    .map((item) => item[0].toUpperCase() + item.slice(1));

  if (normalize.join("") && normalize.join("").length < 140) {
    result = `#${normalize.join("")}`;
  }

  return result;
}

console.log(generateHashtag(""));
