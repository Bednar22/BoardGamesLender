import { Box, Typography, Button, Grid, Stack } from '@mui/material';
import backgroundImage from '../../assets/background.png';
import { GridBreak } from '../../utils/gridBreak';
import { Link } from 'react-router-dom';

export const Homepage = () => {
    return (
        <>
            <Box
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    // backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100vh'
                sx={{ pl: 5 }}
            >
                <Grid container alignContent='center'>
                    <Grid item xs={4}>
                        <Stack alignItems='center' direction='column' spacing={4}>
                            <Typography variant='h5' align='center'>
                                Join us and get access to the opportunity to create advertisements for board game
                                exchanges!
                            </Typography>
                            <Link to='/posts' style={{ textDecoration: 'none' }}>
                                <Button sx={{ p: 1 }} variant='contained'>
                                    Check out advertisements!
                                </Button>
                            </Link>
                        </Stack>

                        <Typography align='center' sx={{ mt: 1 }}>
                            Do not have an account?
                            <Link to='/signup' style={{ color: 'black' }}>
                                Sign up
                            </Link>
                        </Typography>
                    </Grid>
                    <GridBreak></GridBreak>
                </Grid>
            </Box>
        </>
    );
};
