import { IoIosSend } from "react-icons/io"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy, limit, serverTimestamp, addDoc } from 'firebase/firestore';
import { Message } from '../components/message';
import { useRef, useState } from 'react';
import { auth } from "../firebase/firebase";
import { firestore } from "../firebase/firebase";
import { FaPlus } from "react-icons/fa";
import profilePicture from '../img/profilePicture.png'

export const ChatSection = () => {

    const messageRef = collection(firestore, 'messages');
    const q = query(messageRef, orderBy('createdAt'), limit(25));
    const [messages] = useCollectionData(q, { idField: 'id' });

    const [message, setMessage] = useState('')
    const dummy = useRef()

    const sendMessage = async () => {
        const { uid, displayName, photoUrl } = auth.currentUser;

        await addDoc(messageRef, {
            text: message,
            createdAt: serverTimestamp(),
            uid,
            displayName,
            photoUrl: photoUrl ? photoUrl : profilePicture
        });
        setMessage('')
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <div className="chatSection">
            <div className="messagesContainer">
            {messages && messages.map(msg => <Message key={msg.id} message={msg} auth={auth} />)}
            <img src="" alt="" />
            <div ref={dummy}></div>
            </div>
            <div className="inputContainer">
                <FaPlus />
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <IoIosSend onClick={sendMessage} />
            </div>
        </div>
    )
}