import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Container } from 'react-bootstrap';
import { MdOutlineLock, MdOutlineLockOpen } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Static login
        if (username === "siddhi" && password === "1234") {
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
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
                                                <FaRegUser className='username'/>
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
                                                {showPassword ? <MdOutlineLockOpen className='password'/> : <MdOutlineLock className='password'/>}
                                            </IconButton>

                                        </InputAdornment>
                                    )
                                }}
                            />
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