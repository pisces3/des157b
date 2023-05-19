(function(){
    'use strict';
    console.log('reading js');

    //Named Function
    //Find area of the triangle by adding two numbers taken from the parameter and dividing it by 2
    // function triangleArea(num1, num2) {
    //     return (num1 + num2) / 2;
    // }
    // console.log(triangleArea(2, 4));

    //Function Expression
    // const triangleArea = function(num1, num2) {
    //     return (num1 + num2) / 2;
    // }
    // console.log(triangleArea(2, 4));

    //Arrow function
    const addNumArrow = (num1, num2) => ((num1 + num2) / 2);
    console.log(addNumArrow(2, 4));
    
}());