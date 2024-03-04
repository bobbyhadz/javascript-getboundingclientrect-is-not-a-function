console.log('bobbyhadz.com');

const boxes = document.getElementsByClassName('box');

const result = boxes[0].getBoundingClientRect();

// 👇️ {bottom: 26.87..., height: ..., left: ..., right: ...}
console.log(result);

// Using an if statement to check if the element exists

const box = null;

if (
  typeof box === 'object' &&
  box !== null &&
  'getBoundingClientRect' in box
) {
  const result = box.getBoundingClientRect();
  console.log(result);
}
