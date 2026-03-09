import { useState } from "react";
import './Header.css'
import { MdSettings } from "react-icons/md";
import Settings from "../Settings/Settings";
import { Button } from "react-bootstrap";

const Header = () => {
    const [openSettings, setOpenSettings] = useState(false);

    const toggleSettings = () => {
        setOpenSettings(!openSettings);
    };
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    Demo
                </div>
                {/* <div className="setting" onClick={toggleSettings}>
                    <MdOutlineSettings className="setting-icon"/>
                </div> */}
                <Button className="setting" onClick={toggleSettings}>
                    <MdSettings className="setting-icon" />
                </Button>
            </div>
            <Settings
                open={openSettings}
                onClose={() => setOpenSettings(false)}
            />
        </>

    )
}

export default Header