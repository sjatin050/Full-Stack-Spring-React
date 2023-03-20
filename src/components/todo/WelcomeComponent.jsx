import { Link , useParams} from "react-router-dom"

export default function WelcomeComponent() {

    // username is a local variable
    // useParams is to get any parameter passed in url
    const {username}= useParams()

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
             {/* we should use Link instead of <a></a> */}
            Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}