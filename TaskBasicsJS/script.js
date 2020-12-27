'use strict';

//1.Какое будет выведено значение: let x = 5; alert( x++ ); ?
/*let x = 5;
alert( x++ );//5 так как постфикс выводит сначала текущее значение*/

//2.Чему равно такое выражение: [ ] + false - null + true ?
/*
console.log([ ] + false - null + true )//NaN*/

//3.Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
/*
let y = 1;
let x = y = 2;
alert(x);//2*/

//4.Чему равна сумма [ ] + 1 + 2?

/*console.log([ ] + 1 + 2)//12*/

//5.Что выведет этот код: alert( "1"[0] )?

/*alert( "1"[0] )//1*/

//6.Чему равно 2 && 1 && null && 0 && undefined ?

/*console.log(2 && 1 && null && 0 && undefined)//null так как && доходит до первого отрицания(false)*/

//7. Есть ли разница между выражениями? !!( a && b ) и (a && b)?
/*
let a,b
let first = !!( a && b );
let second = (a && b)
let result = first === second
console.log(result)//false*/

//8.Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

/*alert( null || 2 && 3 || 4 );//3 так как || доходит до первого true*/

//9. a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

/*
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a==b)//false так как это 2 разные переменные хоть и значения у них одинаковые*/

//10. Что выведет этот код: alert( +"Infinity" ); ?
/*
alert( +"Infinity" )//Infinity + означает что мы меняем тип данных из строки в число*/

//11. Верно ли сравнение: "Ёжик" > "яблоко"?
/*let a = "Ёжик";
let b = "яблоко";
console.log( a > b);//false идт побуквенное сравнение*/

//12.Чему равно 0 || "" || 2 || undefined || true || falsе ?
/*console.log(0 || "" || 2 || undefined || true || falsе )//2 || доходит до первого true*/

