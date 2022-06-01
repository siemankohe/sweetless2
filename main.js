const bgc1 = document.getElementById('bgc1');
const bgc2 = document.getElementById('bgc2');
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');


const btn1 = document.getElementById('true-button');

btn1.addEventListener('click', () => {
    bgc1.style.fill = '#E6007E';
    txt1.style.fill = '#FFFFFF';
    bgc2.style.fill = '#FFFFFF';
    txt2.style.fill = '#E6007E';
    bgc1.style.transition = 'all 0.3s ease-in-out';
    txt1.style.transition = 'all 0.3s ease-in-out';
})

const btn2 = document.getElementById('false-button');

btn2.addEventListener('click', () => {
    bgc1.style.fill = '#FFFFFF';
    txt1.style.fill = '#E6007E';
    bgc2.style.fill = '#E6007E';
    txt2.style.fill = '#FFFFFF';
    bgc2.style.transition = 'all 0.3s ease-in-out';
    txt2.style.transition = 'all 0.3s ease-in-out';
})


