import { isSignTrue } from "../features/signCheck/signCheck"
import { useDispatch } from "react-redux"
import { FaLongArrowAltRight, FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase'

export const SignUpContainer = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    // Requirements Checker
    const [caseChecker, setCaseChecker] = useState(false)
    const [lengthChecker, setLengthChecker] = useState(false)
    const [numberChecker, setNumberChecker] = useState(false)
    const [mailChecker, setMailChecker] = useState(false)

    // Password Checker
    useEffect(() => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        if (password.length >= 8) {
            setLengthChecker(true)
        } else {
            setLengthChecker(false)
        }
        if (/[0-9]/.test(password)) {
            setNumberChecker(true)
        } else {
            setNumberChecker(false)
        }
        if (hasUppercase && hasLowercase) {
            setCaseChecker(true)
        } else {
            setCaseChecker(false)
        }
    }, [password])

    useEffect(() => {
        if (email.includes('@') && email.includes('.com')) {
            setMailChecker(true)
        } else {
            setMailChecker(false)
        }
    }, [email])

    // User Creator
    const handleSubmit = useCallback(() => {
        if (!email || !password || !username) {
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                alert("You have signed up")
                setUsername('')
                setEmail('')
                setPassword('')
                updateProfile(user, { displayName: username });
                dispatch(isSignTrue())
            })
            .catch(e => {
                console.log(e)
            })
    }, [email, password, username, dispatch])

    return (
        <div className="signUpContainer">
            <h2>Sign Up</h2>
            <p className="lightGray">Welcome to the K-Chat Universe!</p>
            <div className="username">
                <label htmlFor="username">
                    <FaUser />
                </label>
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {username && <FaCheckCircle className="checked" />}
            </div>
            <div className="email">
                <label htmlFor="email">
                    <IoMdMail />
                </label>
                <input type="email" id="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                {email && mailChecker && <FaCheckCircle className="checked" />}
            </div>
            <div className="password">
                <label htmlFor="password">
                    <FaLock />
                </label>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {lengthChecker && numberChecker && caseChecker && <FaCheckCircle className="checked" />}
            </div>
            <div className={lengthChecker ? 'requirementsTrue' : 'requirements'}>
                <GoDotFill />
                <p>Least 8 characters</p>
            </div>
            <div className={numberChecker ? 'requirementsTrue' : 'requirements'}>
                <GoDotFill />
                <p>Least one number (0-9)</p>
            </div>
            <div className={caseChecker ? 'requirementsTrue' : 'requirements'}>
                <GoDotFill />
                <p>Lowercase (a-z) and uppercase (A-Z)</p>
            </div>
            <button onClick={handleSubmit}>Sign Up!
                <span>
                    <FaLongArrowAltRight />
                </span>
            </button>
            <div className="switchSign">Already have an account? <p className="linkBtn" onClick={() => dispatch(isSignTrue())}>Log In.</p></div>
        </div>
    )
}