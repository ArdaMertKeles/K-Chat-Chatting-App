import { Link } from "react-router-dom"

export const NotLoggedIn = () => {

    return (
        <div className="notLoggedInWrapper">
            <div className="notLoggedInContainer">
                <h3>You are not logged in!</h3>
                <p>You need to be logged in for viewing this page.</p>
                <Link to={'/'}>
                    <button>Log-In</button>
                </Link>
            </div>
        </div>
    )
}