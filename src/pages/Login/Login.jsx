import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Container} from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";
import { showError, showSuccess } from '../../utils/toast';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username && !password) {
            showError("Username and Password required");
            return;
        }

        if (!username) {
            showError("Username required");
            return;
        }

        if (!password) {
            showError("Password required");
            return;
        }

        if (username === "siddhi" && password === "1234") {
            showSuccess("Login successful");
            navigate("/dashboard");
        } else {
            showError("Invalid credentials");
        }
    };
    return (
        <Container>
            <div className="login">
                <div className="login-box">
                    <div className="login-text">
                        <h2 className="text1">Welcome back</h2>
                        <h5 className="text2">Enter your credentials to access your account</h5>
                    </div>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: 'auto' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='input-field'>
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                type='text'
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">

                                            <IconButton>
                                                <FaRegUser className='username' />
                                            </IconButton>

                                        </InputAdornment>
                                    )
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">

                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <MdRemoveRedEye className='password' /> : <LuEyeClosed className='password' />}
                                            </IconButton>

                                        </InputAdornment>
                                    )
                                }}
                            />
                            <div className="forgot-password">
                                <NavLink
                                    to="/forgot-password"
                                >
                                    Forgot Password ?
                                </NavLink>
                            </div>
                        </div>
                    </Box>
                    <Button variant='contained' className='login-btn' type='submit' onClick={handleSubmit}>
                        Login
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Login