// Ex.1
//"use strict";
//while (true){
//const userINPUT = parseInt(prompt('Введите число от 0 до 999 || введите любое слово чтобы выйти. '))
//    if (!Number.isInteger(userINPUT)){
//    break
//    }
//    a = parseInt(userINPUT) / 100
//    b = parseInt(userINPUT) / 10
//    b = parseInt(b) % 10
//    c = parseInt(userINPUT) % 10
//    arr = []
//    arr.push('сотни:', parseInt(a), 'десятки:', b, 'единицы:', c)
//    alert(arr)
//}

//Ex. 2 Не получилось.
class basket {
    constructor(name, price, count){
    this.name = 'Клавиатура'
    this.price = 78000
    this.count = 1
    }
    constructor2(name, price, count){
    this.name = 'Планшет'
    this.price = 3000
    this.count = 2
    }
}

function countBasketPrice(basket) {
   return basket.reduce(function (price, count) {
       return this.price + this.count * this.count;
   }, 0);
   return basket.reduce((price, count) => this.price + this.count * this.count, 0);
  }
console.log(countBasketPrice(basket))

//Урок 3. Циклы, массивы, структуры данных
//Ex. 1
//var i = 0
//arr = []
//while(parseInt(i) < 100){
//    i = parseInt(i) + 1
//    arr.push(i)
//}
//alert(arr)

//Ex. 2
//  const basket = [
//    ['Клавиатура', 78000, 1],
//    ['Планшет', 3000, 2],
//  ];
//
//  function countBasketPrice(basket) {
//    return basket.reduce(function (totalPrice, cartItem) {
//        return totalPrice + cartItem[1] * cartItem[2];
//    }, 0);
//    return basket.reduce((totalPrice, cartItem) => totalPrice + cartItem[1] * cartItem[2], 0);
// }
//
// console.log(countBasketPrice(basket));
