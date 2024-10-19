import { isForgetTrue } from "../features/signCheck/forgetPasswordCheck";
import { useDispatch } from "react-redux"
import { IoMdMail } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useCallback, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const ForgetPasswordContainer = () => {

    const [email, setEmail] = useState()

    const dispath = useDispatch()

    const handleSubmit = useCallback(() => {
        if (!email) {
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                
            })
            .catch((e) => {
                console.log(e)
            })
    }, [email])

    return (
        <div className="logInContainer">
            <h2>Forgot My Password</h2>
            <p className="lightGray">Let us help you to change your password!</p>
            <div className="email">
                <label htmlFor="email">
                    <IoMdMail />
                </label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail" />
            </div>
            <button onClick={handleSubmit()}>Send email!
                <span>
                    <FaLongArrowAltRight />
                </span>
            </button>
            <p className="forgetPassword" onClick={() => dispath(isForgetTrue())}>Get back to Log-In page.</p>
        </div>
    )
}