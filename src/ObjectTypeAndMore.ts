// reference type --> Object


const user : {
    readonly company : "Siciliamia";
    firstName : string;
    middleName? : string; // by giving it a question mark its now an optional 
    lastName : string;
    isMarried: boolean
} = {
    company : "Siciliamia",
    firstName : 'Sheik',
    middleName : "Musleh",
    lastName : "Uddin",
    isMarried: false
}