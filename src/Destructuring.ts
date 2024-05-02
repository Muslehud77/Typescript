{
    // Object destructuring

    const user = {
        id:500,
        name: {
            firstName : 'Sheik',
            middleName: 'Musleh',
            lastName : 'Uddin'
        },
        contactNo : '111111',
        address: 'uganda'
    }


   const {contactNo,name:{middleName:midName}} = user 

 // Array destructuring

 const myFriends = ['chandler','joey','ross','monica','phoebe']

const [,,bestFriend,...rest] = myFriends


}