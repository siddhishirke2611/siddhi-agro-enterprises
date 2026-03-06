import React from 'react'
import './Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Container } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <div className="login">
                <div className="login-box">
                    <h4 className="text">Welcome back</h4>
                    <h5 className="text">Login To</h5>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: 'auto' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='input-field'>
                            <TextField id="outlined-basic" label="Username" variant="outlined" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                        </div>
                    </Box>
                    <Button variant='contained' className='login-btn'>Login</Button>
                </div>
            </div>
        </Container>
    )
}

export default Login