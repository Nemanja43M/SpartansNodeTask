const arr = ['x:1', 'y:2', 'x:3', 'a:15'];

const map = {};

arr.forEach(item => {
  const [key, value] = item.split(':');
  if (map[key]) {
    map[key] += parseInt(value);
  } else {
    map[key] = parseInt(value);
  }
});

const keys = Object.keys(map).sort();

let result = '';
keys.forEach(key => {
  result += `${key}=${map[key]}, `;
});

result = result.slice(0, -2);

console.log(result);
