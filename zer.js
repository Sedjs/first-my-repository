var num;
num = 5;
num_1 = 3;
sum = num + num_1;
console.log("Переменная: " + sum);
console.log(Math.PI);
console.log("Math." + Math.min(3, 5, 2, 75));
var lite = 12;
if(lite != 12) {
  console.log("Правильно");
}
else if (lite < 30) {
console.log("Меньше 30");
}
else  if (lite > 10) {
console.log("Больше 10");
}
else {
  console.log("Неправильно");
}
//&& оператор И, || оператор ИЛИ
var slv = "word";
switch(slv) {
  case "7":
    console.log("Перуменная со значением 7");
    break;
  case "word":
    console.log("Перуменная со значением word");
    break;
}
var ait = [3, 6, 2, 7, 4, "ghd", true];
ait[0] = "wait";
console.log(ait[0]);
var pin = [[3, 7, 9], ['bayong', 'wenz'], ['iord','zen']];
console.log(pin[1][1]);
for(var tz = 0; tz < 12; tz++) {
  console.log(tz);
}

var i=3;
while(i<20) {
  console.log(i);
  i++;
}
var x = 50;
do {
 console.log(x);
 x++;
} while(x>70);

alert("Что-то не так!");
confirm("Перейдете на другой сайт?");
var t = confirm("rut");
console.log(t);

prompt("Сколько хотите заказать?");
var date = prompt("Сколько вам лет?");
if (date <50) {
  console.log("Вы подходите!");
}
else if (date > 50) {
  console.log("Извините, но вы не подходите");
}

function brain(slovo) {
  console.log(slovo + "Знание - сила!");
}

brain("fact ");

 function call(digital) {
  var nel = 7;
  var lot = nel + digital;
  return lot;//возвращает переменную;

 }
 var mat = call(34);//при возвращении переменной нужно помещать в другую переменную;

 console.log(mat);

 var lin=0;
function clickButton(noz) {
  lin++;
  noz.innerHTML = "povtor " + lin;//позволяет обращаться к HTML;
  alert('close');
}
