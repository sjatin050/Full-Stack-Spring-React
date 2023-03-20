import { createContext, useContext, useState } from "react";
// To pass a value to other pages also Use 'Context'
//1: Create a Context
export const AuthContext = createContext()
// created below .. so that other files can use it directly
export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({ children }) {

    //Put some state in the context
    //const [number, setNumber] = useState(10)
    //3: Put some state in the context
    const [isAuthenticated,setAuthenticated] = useState(false)

    

    // will increment the value after every 10 sec.
    // setInterval( () => setNumber(number+1), 10000 )

    function Login(username , password) {

        // in Js we use triple === 
        if(username==="in28minutes" && password==="dummy"){
            setAuthenticated(true)
            return true
            
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    // below we are declaring a object without creating a Class
    const valueToBeShared = { isAuthenticated , Login, logout}

    return (
        // through the below thing we can share the values to other pages alsoo
        <AuthContext.Provider value={ valueToBeShared }>
            {children}
        </AuthContext.Provider>
    )
} 
