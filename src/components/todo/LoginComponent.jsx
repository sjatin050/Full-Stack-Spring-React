import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent() {

    // useState returns 2 value -> variable called username and the function {setUsername} which changes the value of that variable.
    // need to create below to state . else username and password value will not change
    const [username,setUsername] = useState('enter_username')

    const [password,setPassword] = useState('')

    //const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();  // it is used to route to other page from current page
    // the below is used for isAuthorized variable
    const authContext = useAuth()

    function handleUsernameChange(event) {
        //console.log(event)
        //console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        //console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){
        // in Js we use triple === 
        if(authContext.Login(username , password)){ //NEW
            //authContext.setAuthenticated(true)
            //console.log('Success')
            // setShowSuccessMessage(true)
            // setShowErrorMessage(false)
            // use $ to pass any varibale is JS
            //  use `` {left tickle , in keyboard 2nd row 1st button} instead of ''
            navigate(`/welcome/${username}`)
            
        } else {
            //authContext.setAuthenticated(false)
            //console.log('Failed')
            // setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    /*
    function SuccessMessageComponent() {

        if(showSuccessMessage) {
            return <div className="successMessage">Authenticated Successfully</div>
        }
        
        return null   
    }
    
    // we have used it directly without creating the function
    function ErrorMessageComponent() {
    
        if(showErrorMessage) {
            return <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
        }
        
        return null   
    }
    */


    return (
        <div className="Login">
            <h1>Time to Login!</h1>
             {/* can call functions like below */}
             {/* true && 'anything'  will give anything
             false && 'anything'  will give false  .. same thing we are doing in below 2 */}
             {/* {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>} */}
             {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            {/* <SuccessMessageComponent />
            <ErrorMessageComponent /> */}
            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    {/* we cannot write 'value=' to any default value .. becuase first we need to synchronize dom value { which is storing the value} and the react state */}
                    {/* for this use useState and set to any default value , so we will tie a form element with a state and need to set onChange also */}
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}