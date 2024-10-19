import { BiWorld } from "react-icons/bi"
import { IoMdSearch } from "react-icons/io"
import { LuPlusCircle } from "react-icons/lu"

export const ChatLister = () => {

    // Group creator
    // const createChatGroup = async (groupName) => {
    //     try {
    //         const chatGroupRef = await addDoc(collection(firestore, ), {
    //             name: groupName,
    //             createdAt: serverTimestamp(),
    //         });
    //         console.log('New chat group created with ID: ', chatGroupRef.id);
    //     } catch (error) {
    //         console.error("Error creating chat group: ", error);
    //     }
    // };

    return (
        <div className="chatListerContainer">
            <div className="listHeader">
                <h2>Chats</h2>
            </div>
            <div className="inputDivision">
                <LuPlusCircle className="addSvg" />
                <div className="search">
                    <input type="text" placeholder="Search through." />
                    <IoMdSearch className="searchSvg" />
                </div>
            </div>
            <div className="chatLister">
                <div className="globalChat">
                    <BiWorld />
                    <div className="details">
                        <h4>Global Chat</h4>
                        <p>27 Members.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}