{
    //Function


//Normal function

function add(num1:number,num2:number):number{
    return num1+num2
}

//Arrow function

const addArrow = (num1:number,num2:number):number => num1+num2


// object --> function ---> method

const poorUser = {
    name : 'Mezba',
    balance : 0,
    addBalance(balance:number):string{
        return `My new balance is : ${this.balance+balance}`
    }
}


const arr : number[] = [1,4,10]

const newArr = arr.map((el:number):number=>el*el)
}