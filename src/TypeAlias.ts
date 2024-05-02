{
    // TypeAlias

    type Student = {
        name : string;
        age : number;
        gender : string;
        contactNo? : string;
        address : string;
    }

    const student1 : Student = {
        name: "Musleh",
        age: 50,
        gender : "male",
        contactNo : "0129183903812",
        address : "Chittagong"

    }

    const student2 : Student={
        name: "Mir",
        age: 40,
        gender : "Male",
        address : "Dhaka"
    }

    const student3 : Student ={
        name: "Mir",
        age: 40,
        gender : "Male",
        address : "Dhaka"
    }


type IsAdmin = boolean
type Name = string

const isAdmin : IsAdmin = true
const name : Name = 'Musleh'

type Add = (num1:number,num2:number)=>number 


const add : Add = (num1,num2) => num1+num2

}