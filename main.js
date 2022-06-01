const btn = document.getElementById('true-button');
const btn2 = document.getElementById('false-button');
const bgc1 = document.getElementById('bgc1');
const bgc2 = document.getElementById('bgc2');
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');


btn.addEventListener('click', function onClick() {
  // 👇️ Change text color for clicked element only
    bgc1.style.fill = '#E6007E';
    txt1.style.fill = '#FFFFFF';
    bgc2.style.fill = '#FFFFFF';
    txt2.style.fill = '#E6007E';
});

btn2.addEventListener('click', function onClick() {
  // 👇️ Change text color for clicked element only
    bgc1.style.fill = '#FFFFFF';
    txt1.style.fill = '#E6007E';
    bgc2.style.fill = '#E6007E';
    txt2.style.fill = '#FFFFFF';
});


