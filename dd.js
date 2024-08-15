// let person ={
//   name: 'jack',
//   age: 18,
//   sex: 'male'
// };
//
// let student ={
//   name: 'Bob',
//   age: 20,
//   xp: '2'
// };
//
// let newStudent = Object.assign({}, person,student);
// console.log(newStudent.name);
// console.log(newStudent.age);
// console.log(newStudent.sex);
// console.log(newStudent.xp);
//
//
//
// console.log('Next line');
// // let arr = ['1', '2', '3'];
// // let [one, two, three] = arr;
// //
// // console.log(one);
// // console.log(two);
// // console.log(three);
//
// let arr = ['hello', 'from', 'above'];
// let [uno, dos, tres] = arr;
// console.log(uno+ " " + dos + " "+ tres);
//
//
// console.log('Next line');
// let obj = {h:100, s:true};
// let {h, s} =obj;
//
// console.log(h);
// console.log(s);
//
// //ES6 Rest Parameters
// function  containsAll(arr){
//   for (let k = 1; k < arguments.length; k++){
//     let num = arguments[k];
//     if (arr.indexOf(num)===-1){
//       return false;
//     }
//   }
//   return true;
// }
//
// let x = [2, 4, 6, 7];
// console.log(containsAll(x, 2, 4, 7));
// console.log(containsAll(x, 6, 4, 9));

//Learning about classes in Javascript
class Rectangle{
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area(){
    return this.calcArea();
  }
  calcArea(){
    return this.height * this.width;
  }
}
const square = new Rectangle(5, 5);
console.log(square.area)
// const poster = new Rectangle(2, 3);
// let total = square.height * poster.width;
// console.log(square.height);
// console.log(poster.width);
// console.log("the total is: "+ total);
//
// //Class methods
