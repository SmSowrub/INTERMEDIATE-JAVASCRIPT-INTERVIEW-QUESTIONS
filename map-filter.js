const Numbers=[3,4,5,6,7,8,9];
// const Square=[];
// for (let i = 0; i < Numbers.length; i++) {
//     const element = Numbers[i];
//     const result=element*element;
//     Square.push(result);
// }
// console.log(Square);

// Numbers.map(function(element,index,array){
//     console.log(element,index,array);
// })

const fast=Numbers.map(function(element){
    return element*element;
})
console.log(fast);

const fast2=Numbers.map(x => x * x);

const second=Numbers.filter( y=> y > 6);

const last=Numbers.find(z => z < 5);
console.log(last);