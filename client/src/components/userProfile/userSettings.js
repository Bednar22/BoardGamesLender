import React, { useState, useEffect } from 'react';
import { Paper, TextField, Grid, Container, Button, Typography, Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GridBreak } from '../../utils/gridBreak';
import { useAuth } from '../../utils/authContext';

export const UserSettings = (props) => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [error, setError] = useState('');
    const [editPhase, setEditPhase] = useState(false);
    const [readOnlyProp, setReadOnlyProp] = useState(true);
    const [email, setEmail] = useState('testowy5@wp.pl');
    const [nickName, setNickName] = useState('testowy5');
    const [name, setName] = useState('Jan');
    const [surname, setSurname] = useState('Kowalski');
    const [phoneNumber, setPhoneNumber] = useState(123123123);
    const [buildingNo, setBuildingNo] = useState('2');
    const [apartmentNo, setApartmentNo] = useState('22');
    const [city, setCity] = useState('Wroclaw');
    const [country, setCountry] = useState('Poland');
    const [street, setStreet] = useState('Wielka');
    const [postalCode, setPostalCode] = useState('22-123');
    const [password, setPassword] = useState('Qwerty123!');
    const [addressId, setAddressId] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (e) => {
        console.log(auth.user);
        setEditPhase(false);
        const userData = {
            surname: 'Kowalski',
            name: 'Jan',
            nickName: 'testowy',
            oldPassword: password,
            newPassword: password,
        };

        const addressData = {
            city: 'Wrocław',
            country: 'Poland',
            street: 'Kwiska',
            postalCode: '51-222',
            apartmentNo: '2',
            buildingNo: '1',
        };

        const config = {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('leaserToken')}`,
            },
        };
    };

    return (
        <>
            <Container maxWidth='md'>
                <Paper sx={{ p: 3, mb: 4 }}>
                    {/* <form onSubmit={() => onSubmit()}> */}
                    <Box>
                        <Grid container alignItems='center' justifyContent='center' spacing={{ xs: 2, md: 3 }}>
                            <Grid item xs={10} md={10}>
                                <Typography align='center' variant='h6'>
                                    User data
                                </Typography>
                            </Grid>

                            <GridBreak />
                            <Grid item xs={12} md={6}>
                                <TextField
                                    value={email}
                                    required
                                    label='E-mail adress'
                                    size='small'
                                    type='email'
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                ></TextField>
                            </Grid>
                            <GridBreak />

                            <GridBreak />
                            <Grid item xs={12} md={6}>
                                <Stack direction='row' spacing={2}>
                                    <TextField
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        InputProps={{
                                            readOnly: readOnlyProp,
                                        }}
                                        required
                                        label='First name'
                                        size='small'
                                    ></TextField>
                                    <TextField
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
                                        InputProps={{
                                            readOnly: readOnlyProp,
                                        }}
                                        required
                                        label='Last name'
                                        size='small'
                                    ></TextField>
                                </Stack>
                            </Grid>
                            <GridBreak />

                            <GridBreak />
                            <Grid item xs={12} md={6}>
                                <TextField
                                    value={nickName}
                                    onChange={(e) => setNickName(e.target.value)}
                                    InputProps={{
                                        readOnly: readOnlyProp,
                                    }}
                                    required
                                    label='Nickname'
                                    size='small'
                                    fullWidth
                                ></TextField>
                            </Grid>
                            <GridBreak />
                            <GridBreak />
                            <Grid item xs={12} md={6}>
                                <TextField
                                    value={phoneNumber}
                                    required
                                    label='Phone number'
                                    size='small'
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                ></TextField>
                            </Grid>
                            <GridBreak />

                            <Grid item xs={10} md={10}>
                                <Typography align='center' variant='h6'>
                                    Address
                                </Typography>
                            </Grid>

                            <GridBreak />
                            <Grid item xs={12} md={6}>
                                <Stack direction='row' spacing={2}>
                                    <TextField
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        InputProps={{
                                            readOnly: readOnlyProp,
                                        }}
                                        required
                                        label='Country'
                                        size='small'
                                    ></TextField>
                                    <TextField
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        InputProps={{
                                            readOnly: readOnlyProp,
                                        }}
                                        required
                                        label='Postal code'
                                        size='small'
                                    ></TextField>
                                </Stack>
                            </Grid>
                            <GridBreak />
                            <GridBreak />
                            <Grid item xs={12} md={6}>
                                <Stack direction='row' spacing={2}>
                                    <TextField
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        InputProps={{
                                            readOnly: readOnlyProp,
                                        }}
                                        required
                                        label='City'
                                        size='small'
                                    ></TextField>
                                    <TextField
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        InputProps={{
                                            readOnly: readOnlyProp,
                                        }}
                                        required
                                        label='Street'
                                        size='small'
                                    ></TextField>
                                </Stack>
                            </Grid>
                            <GridBreak />
                            <GridBreak />
                            <Grid item xs={12} md={6}>
                                <Stack direction='row' spacing={2}>
                                    <TextField
                                        value={buildingNo}
                                        onChange={(e) => setBuildingNo(e.target.value)}
                                        InputProps={{
                                            readOnly: readOnlyProp,
                                        }}
                                        required
                                        label='Building number'
                                        size='small'
                                    ></TextField>
                                    <TextField
                                        value={apartmentNo}
                                        onChange={(e) => setApartmentNo(e.target.value)}
                                        InputProps={{
                                            readOnly: readOnlyProp,
                                        }}
                                        label='Apartment number'
                                        size='small'
                                    ></TextField>
                                </Stack>
                            </Grid>
                            <GridBreak />

                            <GridBreak />

                            {error ? (
                                <Grid item xs={10} md={10}>
                                    <Typography color='error' variant='subtitle2' align='center'>
                                        {error}
                                    </Typography>
                                </Grid>
                            ) : null}

                            {editPhase ? (
                                <>
                                    <GridBreak />
                                    <Grid item xs={8} md={4}>
                                        <Button
                                            variant='contained'
                                            sx={{ width: 1 / 1 }}
                                            onClick={(e) => {
                                                handleClickOpen();
                                            }}
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                    <GridBreak />
                                </>
                            ) : (
                                <>
                                    <GridBreak />
                                    <Grid item xs={8} md={4}>
                                        <Button
                                            variant='contained'
                                            sx={{ width: 1 / 1 }}
                                            onClick={() => {
                                                setEditPhase(true);
                                                setReadOnlyProp(false);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Grid>
                                    <GridBreak />
                                </>
                            )}
                        </Grid>
                    </Box>
                    {/* </form> */}
                </Paper>
            </Container>
        </>
    );
};
