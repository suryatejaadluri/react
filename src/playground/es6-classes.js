class Person{
    constructor(name="Anonymous",age=0){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return (`${this.name} is ${this.age} years(s) old`);
    }
    getGreeting(){
        return `Hello this is ${this.name}`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
        hasMajor(){
            return !!this.major;
        }
            getDescription(){
            let description=super.getDescription();
            if(this.hasMajor())
            description+=` His major is ${this.major}`;
            return description;
            
        }
    }
    class Traveler extends Person{
        constructor(name,age,location){
            super(name,age);
            this.location=location;}
            hasLocation(){
                return !!this.location;
            }getDescription(){
          let description=super.getGreeting();
          if(this.hasLocation())
          description+=` I am from ${this.location}`;
          return description;
        }
    }

const person=new Student('Surya',21,'CSE');
const travel=new Traveler('Surya',21,'India');
const other=new Traveler();
console.log(other.getDescription());
console.log(travel.getDescription());
console.log(person.getDescription());
