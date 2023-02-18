"use strict"


// let count=0;
// for (const key in stu) {
//     console.log(key+"/"+stu[key])
//     count++;
    
// }
// console.log(count)

// stu.adress="Xalqlar";
// console.log(stu.adress)


let stu1={
    id:1,
    name:"Resul",
    surname:"Hesenov",
    age:15
}


let stu2={
    id:2,
    name:"Gultac",
    surname:"Ceferova",
    age:18
}
let stu3={
    id:3,
    name:"Nicat",
    surname:"Novruzzade",
    age:21
}
let stu4={
    id:4,
    name:"Musa",
    surname:"Efendiyev",
    age:19
}
let stu5={
    id:5,
    name:"Anar",
    surname:"Huseynov",
    age:36
}


// let students=[stu1,stu2,stu3,stu4,stu5];

// for (const iterator of students) {
//     console.log(iterator.name)
// }



let group={
    name:"P414",
    capacity:3,
    students:[],
    addStudent:function(student){


        if(this.students.length==this.capacity){
            console.log("group already filled")
            return;
           }
       let stu=this.students.find(s=>s.id==student.id);

       if(stu!=undefined){
        console.log("this student already exist")
        return;
       }


       
        this.students.push(student);
       
    },

    updateStudent:function(student){
    
        let existStudent=this.students.find(s=>s.id==student.id)

        if(student.name!=undefined){
           existStudent.name=student.name
        }
        if(student.surname!=undefined){
            existStudent.surname=student.surname
         }
         if(student.age!=undefined){
            existStudent.age=student.age
         }


    },
    deleteStudent:function(id){
    //   console.log(this.students.filter(s=>s.id!=id))

    //   this.students=(this.students.filter(s=>s.id!=id))


    let existStudentIndex=this.students.findIndex(s=>s.id==id)
    // console.log(existStudentIndex)

    this.students.splice(existStudentIndex,1)

    },
    getAllStudents:function(){
        // for (const item of this.students) {
        //     console.log(item.name+item.surname+item.age)
        // }
        return this.students;

    }
}
group.addStudent(stu5);
group.addStudent(stu4);
group.addStudent(stu3);
group.addStudent(stu3);



// console.log(group.students)

// console.log(group.getAllStudents())


// let updatedStudent={
//     id:5,
//     name:"Anar",
//     surname:"Huseynov",
//     age:26
// };

// group.updatedStudent(updatedStudent)
// console.log(group.getAllStudents())


// group.deleteStudent(5);
// console.log(group.getAllStudents())




class Car{
    constructor(color,speed,test){
        // this.name=name;
        // this.color="Red";
        // this.speed=speed;
        this.color=color;
        this.speed=speed;
        this.test=test;


    }
    speedTest(data){
        console.log(600+data)
    }
}

// let car1=new Car("Mercedes",500)
// console.log(car1.name+"/"+car1.color+"/car1,speed")

// let car2=new Car("Toyota");
// car2.spped(400)



class BMW extends Car{
    constructor(marka,color,speed,tes){
        super(color,speed,this.test)
        this.marka=marka;


    }
}

let bmw=new BMW("F30","yellow",500,"tested");
console.log(bmw.color)

bmw.speedTest(300)


class Test{
    static eating(){
        console.log("eat")
    }
}


let name=new Array()

let numbers=[1,2,3,4,5];


let names=["Resul","Ramil"]
Array.prototype.musa="salam";
console.log(names.musa)

Array.prototype.sumOfNumbers=function(){
    let sum=0;
    for(let i=0;i<this.length;i++){
sum+=this[i];

    }
    return sum;
}
console.log(numbers.sum());
