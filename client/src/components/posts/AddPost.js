import React, { useState, useEffect } from 'react';
import {
    Paper,
    TextField,
    Grid,
    Container,
    Button,
    Typography,
    Stack,
    Box,
    getImageListItemBarUtilityClass,
} from '@mui/material';
import { GridBreak } from '../../utils/gridBreak';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase-config';
import { useAuth } from '../../utils/authContext';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../assets/App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../utils/firebase-config';

export const Addpost = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [pricePerWeek, setPricePerWeek] = useState('');
    const [pricePerMonth, setPricePerMonth] = useState('');
    const [deposit, setDeposit] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableTo, setAvailableTo] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const smallSize = useMediaQuery('(max-width:900px)');
    const { currentUser } = useAuth();
    const annCollection = collection(db, 'Ogłoszenia');
    let navigate = useNavigate();

    const categories = ['Strategy', 'Card', 'Deck builder', 'Kids'];

    const addPost = (e) => {
        const id = Math.floor(Math.random() * 1000000);
        const storageRef = ref(storage, `images/post$` + id);
        const uploadTask = uploadBytesResumable(storageRef, selectedImage);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const post = {
                        title,
                        description,
                        pricePerDay,
                        pricePerWeek,
                        pricePerMonth,
                        availableFrom,
                        availableTo,
                        imageUrl: downloadURL,
                        ownerId: currentUser.uid,
                        owner: currentUser.email,
                    };
                    addDoc(annCollection, post);
                });
            }
        );
        navigate('/');
        e.preventDefault();
    };

    return (
        <>
            <Container maxWidth='lg'>
                <Paper sx={{ p: 2, mb: 6 }}>
                    <form onSubmit={(e) => addPost(e)}>
                        <Box
                            sx={
                                smallSize
                                    ? { width: 1 / 1, mb: 2, p: 1 }
                                    : { width: 12 / 25, mb: 2, p: 1, display: 'inline-block' }
                            }
                        >
                            <Grid container spacing={{ xs: 2, md: 3 }} direction='row' alignItems='flex-start'>
                                <Grid item xs={12} md={12}>
                                    <TextField
                                        required
                                        label='Title'
                                        size='small'
                                        type='text'
                                        fullWidth
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField
                                        multiline
                                        rows={5}
                                        required
                                        label='Description'
                                        type='text'
                                        size='small'
                                        fullWidth
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl fullWidth size='small'>
                                        <InputLabel id='demo-simple-select-label'>Category</InputLabel>
                                        <Select
                                            fullWidth
                                            labelId='demo-simple-select-label'
                                            id='demo-simple-select'
                                            label='Category'
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            {categories.map((item) => {
                                                return (
                                                    <MenuItem key={item} value={item}>
                                                        {item}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <GridBreak />
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        required
                                        label='Price per day'
                                        type='text'
                                        size='small'
                                        fullWidth
                                        value={pricePerDay}
                                        onChange={(e) => setPricePerDay(e.target.value)}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={6} md={6}>
                                    <TextField
                                        required
                                        label='Price per week'
                                        type='text'
                                        size='small'
                                        fullWidth
                                        value={pricePerWeek}
                                        onChange={(e) => setPricePerWeek(e.target.value)}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={6} md={6}>
                                    <TextField
                                        required
                                        label='Price per month'
                                        type='text'
                                        size='small'
                                        fullWidth
                                        value={pricePerMonth}
                                        onChange={(e) => setPricePerMonth(e.target.value)}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={6} md={6}>
                                    <TextField
                                        label='Deposit'
                                        type='text'
                                        size='small'
                                        fullWidth
                                        value={deposit}
                                        onChange={(e) => setDeposit(e.target.value)}
                                    ></TextField>
                                </Grid>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Grid item xs={6}>
                                        <DatePicker
                                            label='Available from'
                                            value={availableFrom}
                                            onChange={(newValue) => {
                                                setAvailableFrom(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} size='small' />}
                                            minDate={Date.now()}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DatePicker
                                            label='Available to'
                                            value={availableTo}
                                            onChange={(newValue) => {
                                                setAvailableTo(newValue);
                                            }}
                                            minDate={availableFrom}
                                            renderInput={(params) => <TextField {...params} size='small' />}
                                        />
                                    </Grid>
                                </LocalizationProvider>
                            </Grid>
                        </Box>
                        <Box
                            sx={
                                smallSize
                                    ? { width: 1 / 1, mb: 2, p: 1 }
                                    : { width: 12 / 25, mb: 2, p: 1, display: 'inline-block' }
                            }
                        >
                            <Grid container spacing={2} direction='row' justifyContent='center' alignItems='flex-start'>
                                <Grid item xs={8}>
                                    <Typography align='center' variant='subtitle1'>
                                        UPLOAD AN IMAGE
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {selectedImage ? (
                                        <Box>
                                            <img
                                                alt='not fount'
                                                className='offer-image'
                                                src={URL.createObjectURL(selectedImage)}
                                            />
                                        </Box>
                                    ) : (
                                        <Paper sx={{ height: 300, mb: 0 }}></Paper>
                                    )}
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <Stack direction='row' spacing={3} justifyContent='space-between'>
                                        <Button
                                            sx={{ width: 1 / 3 }}
                                            variant='contained'
                                            component='label'
                                            onChange={(event) => {
                                                setSelectedImage(event.target.files[0]);
                                            }}
                                        >
                                            Upload File
                                            <input accept='image/*' type='file' hidden />
                                        </Button>
                                        {selectedImage && (
                                            <Button
                                                sx={{ width: 1 / 3 }}
                                                variant='contained'
                                                onClick={() => setSelectedImage(null)}
                                            >
                                                Remove
                                            </Button>
                                        )}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ minHeight: 5 }}>
                            <Typography align='center' color='error'>
                                {error}
                            </Typography>
                        </Box>
                        <Box sx={{ width: 1 / 3, mx: 'auto', mt: 4 }}>
                            <Button variant='contained' type='submit' fullWidth>
                                Add new item
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Container>
        </>
    );
};
