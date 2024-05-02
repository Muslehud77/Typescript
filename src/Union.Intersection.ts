{
    //*union types

    // type FrontendDeveloper = 'fakibajDeveloper' | 'juniorDeveloper'
    // type FullStackDeveloper = 'frontEndDeveloper' | 'expertDeveloper'

    // type Developer = FrontendDeveloper | FullStackDeveloper


    // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

    // type User = {
    //     name : string;
    //     email? : string;
    //     gender: "male" | "female";
    //     bloodGroup : "O+" | "A+" | "AB+"
    // }

    // const user : User = {
    //     name:"Musleh",
    //     gender : "male",
    //     bloodGroup: "A+"
    // }

//*intersection types

    type FrontendDeveloper = {
        skills : string[];
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills : string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullStackDeveloper = {
        skills : ['HTML'],
        designation1:'Frontend Developer',
        designation2:"Backend Developer"
    }








}