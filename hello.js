'use strict';

function hello (...names) {
  return 'Hello ' + names.join(' & ');
}

console.log(hello('World'));
