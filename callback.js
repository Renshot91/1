function doubleTwor(num){
return 2 * 2
}
function doubleThree(num){
return 2 * 3
}
function doubleFourt(num){
return 2 * 4
}
function doubleNum(num)  {
return 2 * num
}
const num1 = doubleNum (3);
const num2 = doubleNum(10);
const numB = doubleNum (350);





//1. Написать функцию, которая будет принимать массив с числами и возвращать новый массив со всеми числами, умноженными на 2
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [10, 20, 30, 40, 50];

const doubleNumbers = arr => {
const new_arr = [];
for(let i = 0; i < arr.length; i++) {
new_arr.push(arr[i] * 2)
}
return new_arr
}
console. log(doubleNumbers (numbers)); // [2, 4, 6, 8, 10] 
console. log (doubleNumbers (numbers2)); // [20, 40, 60, 80, 100]
console.log(doubleNumbers([23,54,100]))

//-----------------
// 2. Написать функцию, которая будет принимать марсив с числами и возвращать новый массив со всеми числами,
//деленными на 2
const divideNumbers = arr => {
    const new_arr = [];
    for(let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] / 2)
    }
    return new_arr
    }
    console.log(divideNumbers(numbers))

    //// 3. Написать функцию, которая будет принимать массив с числами и возвращать новый массив со всеми числами, возведенными во вторую степень
    const powNumbers = arr => {
        const new_arr = [];
        for(let i = 0; i < arr.length; i++) {
        new_arr.push(arr[i] ** 2)
        }
        return new_arr
        }
        console.log(powNumbers(numbers))

        //------------------
        // 4.  Написать функцию, которая будет принимать массив с числами и функцию, описывающую, что нужно сделать с числами прежде чем добавить их в новый массив

const changeNumbers = (arr, callback_func) => {
    const new_arr = [];
    for(let i = 0; i < arr.length; i++){
      new_arr.push(callback_func(arr[i]))
    }
    return new_arr
  }
  
  const double = num => num * 2;
  const divide = num => num / 2;
  const pow = num => num ** 2;
  const sum100 = num => num + 100;
  
  // console.log(changeNumbers(numbers, double));
  // console.log(changeNumbers(numbers, divide));
  // console.log(changeNumbers(numbers, pow));
  // console.log(changeNumbers(numbers, sum100));
  
  // console.log(changeNumbers(numbers2, double));
  // console.log(changeNumbers(numbers2, divide));
  // console.log(changeNumbers(numbers2, pow));
  // console.log(changeNumbers(numbers2, sum100));


  const a = numbers2.map(double)
  const b = numbers2.map(divide)
  console.log(a)
  console.log(b)


  //-----------------Objects - Дан масив с пользователями
  const users = [
    {
      id: 1,
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 30,
      score: 44.52
    },
    {
      id: 2,
      first_name: 'Kirill',
      last_name: 'Shmanov',
      age: 13,
      score: 144.33
    },
    {
      id: 3,
      first_name: 'Petr',
      last_name: 'Ivanov',
      age: 54,
      score: 10.08
    },
    {
      id: 4,
      first_name: 'Irina',
      last_name: 'Sokolova',
      age: 29,
      score: 78.94
    },
    {
      id: 5,
      first_name: 'Boris',
      last_name: 'Pechkin',
      age: 24,
      score: 18.25
    }
  ]
  // 1. Вывести в консоль первого и последнего пользователей в списке
  console.log(users[0])
  console.log(users[users.length -1])
// 2. Вывести в консоль имена первого и последнего пользователя в списке
  console.log(users[0].first_name)
  console.log(users[users.length -1].first_name)

//----------
// 3. Вывести в консоль каждый эелемент массива
for(let i = 0; i < users.length; i++){
    console.log(users[i])
}