let input = document.querySelector('.field_input');
let btn = document.querySelector('.field_btn');
let chek = document.querySelector('.result_chek_out');
let help = document.querySelector('.result_help_out');
let count = document.querySelector('.result_count_out');

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 10);

btn.onclick = function (event) {
  event.preventDefault()
  userNum = input.value;
  if (userNum > randNum) {
    chek.textContent = "не верно";
    help.textContent = "число меньше";
    item++;
    count.textContent = item;
  } else if (userNum < randNum) {
    chek.textContent = "не верно";
    help.textContent = "число больше";
    item++;
    count.textContent = item;
  } else if (userNum = randNum) {
    chek.textContent = " вы выиграли";
    help.textContent = "Это число = " + userNum;
    item++;
    count.textContent = item;
  }

};

//