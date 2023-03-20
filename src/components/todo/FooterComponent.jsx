// import { useAuth } from "./security/AuthContext"

export default function FooterComponent() {

    //const authContext = useContext(AuthContext)
    // const authContext = useAuth()

    //console.log(`Footer component - ${authContext.number}`);

    return (
        <footer className="footer">
            
            <div className='container'>
            <p className='copyright'> Copyright @ 2023 : Jatin Singh</p>
            {/* Your Footer */}
            </div>
            
        </footer>
    )
}