import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, Stack, Rating, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

export const SinglePost = ({ postId, renterNickname, renterScore, offerTitle, pricePerDay, offerCity, imageUrl }) => {
    const [offerImage, setOfferImage] = useState('');

    return (
        <>
            <Box className='offer-tile' sx={{ borderRadius: '8px', backgroundColor: 'white' }}>
                <Link
                    to={`/offers/offerDetails/${postId}`}
                    style={{ textDecoration: 'none', width: '100%', height: '100%', color: 'black' }}
                >
                    <Paper className='offer-tile'>
                        <Stack sx={{ p: 1 }}>
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={offerTitle}
                                    style={{
                                        borderRadius: '8px',
                                        marginBottom: '8px',
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                ></img>
                            ) : (
                                <Skeleton variant='rectangular' height={200}></Skeleton>
                            )}
                            <Stack
                                className='typography-stack'
                                direction='row'
                                alignItems='center'
                                justifyContent='space-between'
                                style={{ borderRadius: '8px', padding: '8px' }}
                            >
                                <Stack>
                                    <Typography fontWeight='bold'>{offerTitle}</Typography>
                                    <Typography>{renterNickname}</Typography>
                                    <Rating readOnly precision={0.1} value={renterScore} />
                                </Stack>
                                <Stack alignItems='center'>
                                    <Typography fontWeight='bold'>{pricePerDay} z??/day</Typography>
                                    <Typography> {offerCity}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Paper>
                </Link>
            </Box>
        </>
    );
};
