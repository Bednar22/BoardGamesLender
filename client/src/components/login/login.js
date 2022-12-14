import React, { useState } from 'react';
import { Paper, TextField, Grid, Container, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { GridBreak } from '../../utils/gridBreak';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../utils/authContext';

export const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const redirectPath = location.state?.path || '/home';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
        try {
            setError('');
            setLoading(true);
            const pies = await login(data.email, data.password);
            console.log(pies);
            navigate('/posts');
        } catch (error) {
            setError('Failed to log in');
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <>
            <Container maxWidth='xs'>
                <Paper sx={{ p: 4 }}>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <Grid container direction='row' justifyContent='center' spacing={4}>
                            <GridBreak />
                            <Grid item xs={10} md={10}>
                                <TextField
                                    fullWidth
                                    label='E-mail adress'
                                    type='email'
                                    {...register('email', {
                                        required: 'Email required',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Invalid email adress',
                                        },
                                    })}
                                    error={errors.email ? true : false}
                                    helperText={errors.email ? errors.email.message : null}
                                    onFocus={() => setError(false)}
                                ></TextField>
                            </Grid>
                            <GridBreak />
                            <GridBreak />
                            <Grid item xs={10} md={10}>
                                <TextField
                                    fullWidth
                                    label='Password'
                                    type='password'
                                    onFocus={() => setError(false)}
                                    {...register('password', {
                                        required: 'Password required',
                                    })}
                                    error={errors.password ? true : false}
                                ></TextField>
                            </Grid>
                            <GridBreak />

                            {error ? (
                                <Grid item xs={12} md={10}>
                                    <Typography color='error' variant='subtitle2' align='center'>
                                        {error}
                                    </Typography>
                                </Grid>
                            ) : null}

                            <GridBreak />
                            {
                                <Grid item xs={10} md={10}>
                                    <Typography align='center'>
                                        Don't have an account?{' '}
                                        <Link to='/signup' style={{ color: '#ffa89a' }}>
                                            {' '}
                                            Join!
                                        </Link>
                                    </Typography>
                                </Grid>
                            }
                            <GridBreak />
                            <Grid item xs={8} md={8}>
                                <Button variant='contained' sx={{ width: 1 / 1 }} type='submit'>
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    );
};
