// in other languages we need to create a class before creating an object
//  but in case of jsx we can directly create an object

const person = {
    name: 'Jatin Singh',
    address: {
        line1: '35 Tej Garhi',
        city: 'Meerut',
        country: 'India',
    },
    profiles: ['Intern', 'SDE', 'Coder'],
    //the below is a function
    printProfile: () => {
        // the below will print all profiles in log
        // its like a for loop .. where profile is a variable 
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    }
}

// function printProfile() {
//     console.log(person.profiles[0])
    
// }

export default function LearningJavaScript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{ person.printProfile() }</div>
            {/* <div>{ printProfile() }</div> */}
        </>
    )
}