import { LogInContainer } from "../components/logInContainer"
import { SignUpContainer } from "../components/signUpContainer"
import { ForgetPasswordContainer } from "../components/forgetPasswordContainer";
import { useSelector } from "react-redux"

export const LogIn = () => {

    const isSign = useSelector((state) => state.signCheck.value)
    const isForget = useSelector((state) => state.forgetPasswordCheck.value)

    return (
        <div className="logWrapper">
            <div className="logContainer">
                {isSign && isForget && <LogInContainer />}
                {!isSign && <SignUpContainer />}
                {!isForget && <ForgetPasswordContainer />}
                <div className={isSign ? 'closure' : 'closureMovement'}>
                    <div className="square"></div>
                    <div className="topSquare"></div>
                </div>
            </div>
        </div>
    )
}