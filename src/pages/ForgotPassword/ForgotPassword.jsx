import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <Container>
            <div className="login">
                <div className="login-box">
                    <div className="login-text">
                        <h2 className="text1">Forgot your password ?</h2>
                        <h5 className="text2">Please enter the email address associated with your account and
                            we'll email you a link to reset your password.</h5>
                    </div>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: 'auto' } }}
                        noValidate
                        autoComplete="off">
                        <div className="input-field">
                            <TextField
                                id="outlined-basic"
                                label="Email address"
                                type='text'
                                variant="outlined"
                                // value={username}
                                // onChange={(e) => setUsername(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">

                                            <IconButton>
                                                <MdOutlineEmail className='username' />
                                            </IconButton>

                                        </InputAdornment>
                                    )
                                }}>
                            </TextField>
                        </div>
                        {/* <div className='forgot-btn'>
                            <NavLink to="/login">
                                Back to login
                            </NavLink>
                            <Button variant='contained' className='login-btn' type='submit'>
                                Send Request
                            </Button>
                        </div> */}
                        <Button variant='contained' className='login-btn' type='submit'>
                            Send Request
                        </Button>
                    </Box>
                </div>
            </div>
        </Container>
    )
}

export default ForgotPassword
