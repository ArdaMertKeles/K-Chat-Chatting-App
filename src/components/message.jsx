export const Message = ({ message, auth }) => {

    const { text, displayName, photoUrl, createdAt, uid } = message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
    const time = createdAt ? createdAt.toDate().toLocaleTimeString() : 'No time available';

    return (
        <div className={messageClass}>
            <img src={photoUrl} alt="" />
            <div className="details">
                <p className="displayName">{displayName}</p>
                <p className="text">{text}</p>
                <p className="time">{time}</p>
            </div>
        </div>
    )
}