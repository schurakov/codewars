function narcissistic(value) {
  const numberLength = value.toString().length;
  const magicNumber = value
    .toString()
    .split("")
    .reduce(
      (accumulator, currentValue) =>
        Number.parseInt(accumulator) +
        Number.parseInt(currentValue) ** numberLength,
      0
    );

  return value === magicNumber;
}

console.log(narcissistic(153));
