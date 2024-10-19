import { isSignFalse } from "../features/signCheck/signCheck"
import { isForgetFalse } from "../features/signCheck/forgetPasswordCheck";
import { useDispatch } from "react-redux"
import { IoMdMail } from "react-icons/io";
import { FaLock, FaLongArrowAltRight } from "react-icons/fa";
import { useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const LogInContainer = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const dispath = useDispatch()

    // LogIn Function
    const handleSubmit = useCallback(() => {
        if (!email || !password) {
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/chat')
            })
            .catch((e) => {
                console.log(e)
            })
    }, [email, password, navigate])

    return (
        <div className="logInContainer">
            <h2>Log In</h2>
            <p className="lightGray">Welcome back to K-Chat Universe!</p>
            <div className="email">
                <label htmlFor="email">
                    <IoMdMail />
                </label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail" />
            </div>
            <div className="password">
                <label htmlFor="password">
                    <FaLock />
                </label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <p className="forgetPassword" onClick={() => dispath(isForgetFalse())}>Forget your password?</p>
            <button onClick={handleSubmit}>Log In!
                <span>
                    <FaLongArrowAltRight />
                </span>
            </button>
            <div className="switchSign">Don't have an account? <p className="linkBtn" onClick={() => dispath(isSignFalse())}>Sign Up.</p></div>
        </div>
    )
}