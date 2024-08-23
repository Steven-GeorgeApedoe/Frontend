function student(name, sex, heightInFeet, weightInKilogram){
  this.name = name;
  this.sex = sex;
  this.heightInFeet = heightInFeet;
  this.weightInKilogram = weightInKilogram;
}

const student1 = new student("Selene", "Female", 5.5, 74);
const student2 = new student("George", "Male", 6, 80);
const student3 = new student("Demetri", "Male", 5.8, 68 );
const Student4 = new student("Monique", "Female", 5.7, 63)
const Student5 = new student("Emily", "female", 5.11, 58)

console.log(student1.name+ " is "+ student1.sex+ " and "+student1.heightInFeet+ " in feet")


