'use strict';
/*function first() {
    setTimeout(function (){
        //Do something
        console.log(1)
    }, 1000);
}
    function second(){
    console.log(2)
    };

    first();
    second();*/

    function learnJS(lang,callback){
        console.log(`Я учу : ${lang}`)
        callback()
    }
    function done(){
        console.log('Я прошел этот урок!');
    }
learnJS('JavaScript', done)