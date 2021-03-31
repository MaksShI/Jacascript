// 1 Ex.
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);          // Префиксный - значение операнда возвращается, а затем увеличивается на единицу.
//d = b++; alert(b);          // Постфиксный - значение операнда возвращается увеличенным на единицу.
//c = (2+ ++a); alert(c);     // c = 2 + 3
//d = (2+ b++); alert(d);     // d = 2 + 2
//alert(a);
//alert(b);

// 2 Ex.
//var a = 2;
//var x = 1 + (a *= 2);
//alert(x)                      // x = 5

// 3 Ex.
//var a = 0
//var b = -9
//    if (a > 0 || a == 0 && b > 0 || b == 0) {
//        alert(a - b)
//
//    }
//    else if (a < 0 && b < 0) {
//        alert(a * b)
//
//    }
//    else if (a > 0 || a == 0 && b < 0 )//{
//        alert(a + b)
//
//    }
//
//    else {
//        alert(b + a)
//    }

// 4 Ex.
//i = 0
//while (i != 15){
//    console.log(i += 1)
//    }

// 5 Ex.
//x = 4
//y = 2
//function sum(x,y) {
//    return alert(x + y)
//}
//function min(x,y) {
//    return alert(x - y)
//}
//function pro(x,y) {
//    return alert(x * y)
//}
//function del(x,y) {
//    return alert(x / y)
//}
//sum(x, y)
//min(x, y)
//del(x, y)
//pro(x, y)

// 6 Ex.
arg1 = prompt('Введите 1 аргумент');
arg2 = prompt('Введите 2 аргумент');
operation = prompt('Введите операцию(+, -, *, /)');
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
        alert(parseInt(arg1) + parseInt(arg2))
        break
        case '-':
        alert(parseInt(arg1) - parseInt(arg2))
        break
        case '*':
        alert(parseInt(arg1) * parseInt(arg2))
        break
        case '/':
        alert(parseInt(arg1) / parseInt(arg2))
        break
    }
}

mathOperation(arg1, arg2, operation)