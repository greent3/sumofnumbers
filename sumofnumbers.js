function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let len = 0;
  while (len < list.length) {
    sum += list[len];
    len++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const newArr = [1, 2, 3, 4];
console.log(sumFor(newArr));
console.log(sumWhile(newArr));
console.log(sumRecursion(newArr, newArr.length));
console.log(sumTheSimpleWay(newArr));
