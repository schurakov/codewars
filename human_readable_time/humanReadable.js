/*
Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  // TODO
  const floorDivision = (dividend, divider) => {
    const remainder = dividend % divider;
    return [(dividend - remainder) / divider, remainder];
  };

  const zeroMaker = (number) => {
    if (number) {
      if (number < 10) {
        return `0${number}`;
      }
      return `${number}`;
    }

    return "00";
  };

  let hours;
  let remainderSeconds;
  let minutes;

  [hours, remainderSeconds] = floorDivision(seconds, 3600);
  [minutes, remainderSeconds] = floorDivision(remainderSeconds, 60);

  return `${zeroMaker(hours)}:${zeroMaker(minutes)}:${zeroMaker(
    remainderSeconds
  )}`;
}

console.log(humanReadable(359999));
