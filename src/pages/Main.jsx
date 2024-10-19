import { ChatLister } from '../components/chatLister';
import { Header } from '../components/header';
import { ChatSection } from '../components/chatSection';
import { useSelector } from 'react-redux';

export const Main = () => {

    const isList = useSelector((state) => state.listerCheck.value)

    return (
        <div className='mainWrapper'>
            <div className="mainContainer">
                {isList && <ChatLister />}
                <div className='chatSectionWrapper'>
                    <Header />
                    <ChatSection />
                </div>
            </div>
        </div>
    );
}
