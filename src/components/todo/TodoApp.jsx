//react-router-dom is used to do routing
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, {useAuth} from './security/AuthContext'

import './TodoApp.css'

function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}




export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                {/* we do routing in the following manner */}
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}></Route>
                        <Route path='/login' element={<LoginComponent/>}></Route>
                        
                        {/* :username is used to pass a paramter */}
                        {/* The AuthenticatedRoute is created so that we cannot access other pages without login */}
                        {/* if you remove it then you can see http://localhost:3000/todos can we accessed witout login */}
                        <Route path='/welcome/:username' element={
                             <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute> 
                        } />

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent /> 
                            </AuthenticatedRoute>
                        } />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent /> 
                            </AuthenticatedRoute>
                        } />

                        <Route path='*' element={<ErrorComponent/>}></Route>
                        
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}













