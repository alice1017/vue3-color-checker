
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

export function separateArray(source) {
  const result = [];

  const total = source.length;
  const arrays = Math.round(total / 5);
  const items = 5 * arrays;
  const remains = total - items;

  let start = 0;
  let end = 5;

  for (const _ of range(arrays)) {
    result.push(
      source.slice(start, end)
    );
    start = end;
    end = start + 5;
  }
  result.push(
    source.slice(total-remains, total)
  );
  return result;
}
