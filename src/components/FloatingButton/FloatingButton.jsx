import {useState} from 'react'
import { Button } from 'react-bootstrap'
import { MdSettings } from "react-icons/md";
import Settings from '../Settings/Settings';
import './FloatingButton.css'

const FloatingButton = () => {
    const [openSettings, setOpenSettings] = useState(false);

    const toggleSettings = () => {
        setOpenSettings(!openSettings);
    };
    return (
        <>
            <Button className="setting" onClick={toggleSettings}>
                <MdSettings className="setting-icon" />
            </Button>
            <Settings
                open={openSettings}
                onClose={() => setOpenSettings(false)}
            />
        </>


    )
}

export default FloatingButton