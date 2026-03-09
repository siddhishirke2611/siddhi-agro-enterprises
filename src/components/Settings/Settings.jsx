import { Drawer, Box, Typography } from "@mui/material";
import ThemeMode from "../ThemeMode/ThemeMode";
import { MdClose } from "react-icons/md";
import './Settings.css'

const Settings = ({ open, onClose }) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >
            <Box sx={{ width: 300, p: 3 }} className="close-btn">

                <Typography variant="h6">
                    Settings
                </Typography>
                <MdClose />

            </Box>
            <Box sx={{ width: 300, p: 3 }}>
                <ThemeMode />
            </Box>
        </Drawer>
    )
}

export default Settings