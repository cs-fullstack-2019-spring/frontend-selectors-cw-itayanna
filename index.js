function printPtag1() {
    var pTag1= document.querySelector('#first'); // this one is printing using id selector
    console.log(pTag1);
    var pTag2= document.querySelector('.special'); // this one is using the class selector
    console.log(pTag2);
    var pTag3= document.querySelector('p'); // this one is using the tag selector
    console.log(pTag3)

}

printPtag1();

function printClass() {
    var firstClass= document.querySelector('.special'); // using the single selector
    console.log(firstClass);
    var allClass= document.querySelectorAll('.special'); // using the all selector
    for (var i=0; i< allClass.length; i++){
        console.log(allClass[i])
    }

}

printClass();

function h1color() {
    var header1= document.getElementsByTagName('h1');
    header1[0].style.color = 'blue';

}

h1color();

function pColor() {
    var lastP= document.getElementById('last');
    lastP.style.color = 'yellow';}
