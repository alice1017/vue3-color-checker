
export function startsWith(str, letter) {
  return str.indexOf(letter) === 0;
}

export function setSharp(str) {
  return startsWith(str, "#") ? str : "#" + str;
}

export function upper(str) {
  return str.toUpperCase();
}

export function range(num) {
  return [...Array(num).keys()].map(n => n + 1);
}
