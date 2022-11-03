import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/App.css';
import Box from '@mui/material/Box';
import { UserLoggedButton } from './userLoggedButton';
import { NotLoggedButton } from './notLoggedButton';
import { useAuth } from '../../utils/authContext';

export const Navbar = (props) => {
    const { currentUser } = useAuth();

    return (
        <>
            <Box className='menu' sx={{ mb: 8 }}>
                <Link className='menu-button' to='/'>
                    LOGO?
                </Link>
                <Stack direction='row'>
                    <NavLink className='menu-button' to='/'>
                        Home
                    </NavLink>
                    <NavLink className='menu-button' to='/addPost'>
                        Offers
                    </NavLink>

                    {currentUser ? <UserLoggedButton /> : <NotLoggedButton />}
                </Stack>
            </Box>
        </>
    );
};
