// створити функцію яка обчислює та повертає площу прямокутника (висотою?)

function rectangle (a, b) {
    return a * b;
}

let rec1 = rectangle (10, 20);
console.log (rec1);

// створити функцію яка обчислює та повертає площу кола

function circle (radius) {
    return Math.PI * radius**2;
}

let circle1 = circle (5);
console.log (circle1);

// створити функцію яка обчислює та повертає площу циліндру

function cylinder (r, h) {
    return 2 * Math.PI * r * ( r + h);
}

let cylinder1 = cylinder (9, 6);
console.log (cylinder1);

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


function maxAndMin(numbers) {
    let arr = numbers.split(" ").map(Number);
    let largest = arr[0];
    let smallest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; 
      }

      if (arr[i] < smallest) {
          smallest = arr [i];
          
      }

     }
      console.log (largest);
      return smallest;

  }

  console.log(maxAndMin("24 98 -15 12"));


// створити функцію яка  створює блок з текстом. Текст задати через аргумент

function someText() {
    let result = ' ';
    let i;
 
    for (i = 0; i < arguments.length; i++) {
       result += arguments[i];
    }
    return result;
 }

 console.log (someText('lorem ipsum dolor set'));





// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator (content) {
    console.log ("<ul>");
    for (let i = 0; i < 3; i++) {
        console.log ("<li>" + content + "</li>");
    }
    console.log ("</ul>");
}
let ulAndLiHTML = ulCreator ("Text for funcUl");



// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulMaker(content, count) {
    console.log ("<ul>");
    for (let i = 0; i < count; i++) {
        console.log ("<li>" + content + "</li>");
    }
    console.log ("</ul>");
}
let ulMakerHTML = ulMaker ("Text for funcUl", 3);


// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let elements = [12, 'hello', true, 'summer'];

html = '<ul>';
elements.forEach(function(item) {
    html += '<li>' + item + '</li>'; }
);
html += '</ul>'

console.log(html);
document.write(html);