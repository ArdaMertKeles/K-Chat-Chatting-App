import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { isListTrue, isListFalse } from "../features/signCheck/chatListerCheck"
import { BiWorld } from "react-icons/bi"

export const Header = () => {

    const isList = useSelector((state) => state.listerCheck.value)

    const dispatch = useDispatch()

    return (
        <div className="headerContainer">
            <span className="closeBtn" onClick={() => isList ? dispatch(isListFalse()) : dispatch(isListTrue()) }>
                {isList ?  <FaLongArrowAltLeft /> : <FaLongArrowAltRight />}
            </span>
            <BiWorld className="globalSvg" />
            <h2>Global Chat</h2>
        </div>
    )
}