import { Grid, Container, Paper, Typography, Stack, Button, Rating, Skeleton } from '@mui/material';
import { GridBreak } from '../../utils/gridBreak';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/authContext';

export const OfferDetailsMain = () => {
    const params = useParams();
    const offerId = params.id;
    const { currentUser } = useAuth();

    const [offerTitle, setOfferTitle] = useState(null);
    const [offerDescription, setOfferDescription] = useState(null);
    const [offerImage, setOfferImage] = useState(null);
    const [pricePerDay, setPricePerDay] = useState(null);
    const [deposit, setDeposit] = useState(null);
    const [renterNickname, setRenterNickname] = useState(null);
    const [offerCity, setOfferCity] = useState(null);
    const [renterScore, setRenterScore] = useState(null);
    const [renterUserId, setRenterUserId] = useState(null);

    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('leaserToken')}`,
        },
    };

    const imageConfig = {
        responseType: 'blob',
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('leaserToken')}`,
        },
    };

    useEffect(() => {
        setOfferTitle('Title');
        setOfferDescription('Description');
        setRenterScore(5);
        setPricePerDay(2);
        setDeposit(30);
        setOfferCity('Wroclaw');
        setRenterNickname('Nick');
        setRenterUserId();
        //         setOfferImage(URL.createObjectURL(res.data))
    }, []);

    const MultilineTextSkeleton = ({ lines, width }) => {
        let skeletons = [];
        for (let line = 0; line < lines; line++) {
            skeletons.push(<Skeleton variant='text' width={width} key={line} />);
        }
        return skeletons;
    };

    const TopLeftPanel = () => {
        return (
            <>
                {offerImage ? (
                    <img
                        src={offerImage}
                        alt={offerTitle}
                        height='100%'
                        width='100%'
                        style={{ objectFit: 'cover', borderRadius: '4px' }}
                    />
                ) : (
                    <Skeleton variant='rectangular' height='100%' />
                )}
            </>
        );
    };

    const TopRightPanel = () => {
        return (
            <Stack spacing={1} height='100%'>
                <Paper style={{ flex: '0.5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stack p={1} alignItems='center'>
                        {renterNickname != null && renterUserId != null ? (
                            <NavLink
                                to={`/user/profile/${renterUserId}`}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <Typography variant='h6' sx={{ wordWrap: 'break-word' }}>
                                    {renterNickname}
                                </Typography>
                            </NavLink>
                        ) : (
                            <Skeleton variant='text' width='150px' />
                        )}
                        {renterScore != null ? (
                            <Rating readOnly precision={0.1} value={renterScore} />
                        ) : (
                            <Skeleton variant='text' width='100px' />
                        )}
                    </Stack>
                </Paper>
                <Stack spacing={1} style={{ flex: '1' }}>
                    <Paper style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Stack direction='row' spacing={5} justifyContent='center' alignContent='center'>
                            <Stack justifyContent='center' alignItems='center'>
                                {pricePerDay != null ? (
                                    <Typography color='secondary' fontWeight='bold' variant='h6'>
                                        Day+
                                    </Typography>
                                ) : (
                                    <Skeleton variant='text' width='80px' />
                                )}
                                {pricePerDay != null ? (
                                    <Typography textAlign='center'>{pricePerDay} points/day</Typography>
                                ) : (
                                    <Skeleton variant='text' width='100px' />
                                )}
                            </Stack>
                        </Stack>
                    </Paper>
                    <Paper style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Stack justifyContent='center' alignItems='center'>
                            {deposit != null ? (
                                <Typography variant='h6' color='secondary' fontWeight='bold'>
                                    Deposit
                                </Typography>
                            ) : (
                                <Skeleton variant='text' width='100px' />
                            )}
                            {deposit != null ? (
                                <Typography>{deposit} points</Typography>
                            ) : (
                                <Skeleton variant='text' width='150px' />
                            )}
                        </Stack>
                    </Paper>

                    <Button variant='contained' component={NavLink} to='booking'>
                        Rent this item
                    </Button>
                </Stack>
            </Stack>
        );
    };

    const BottomLeftPanel = () => {
        return (
            <Paper>
                <Stack p={1}>
                    {offerTitle != null ? (
                        <Typography variant='h5' fontWeight='bold' sx={{ wordWrap: 'break-word' }}>
                            {offerTitle}
                        </Typography>
                    ) : (
                        <Skeleton variant='text' width='50%' />
                    )}
                    {offerCity != null ? (
                        <Typography variant='h6' fontWeight='bold' color='secondary' sx={{ wordWrap: 'break-word' }}>
                            In {offerCity}
                        </Typography>
                    ) : (
                        <Skeleton variant='text' width='30%' />
                    )}
                    {offerDescription != null ? (
                        <Typography sx={{ wordWrap: 'break-word' }}>{offerDescription}</Typography>
                    ) : (
                        <MultilineTextSkeleton lines={10} width='100%' />
                    )}
                </Stack>
            </Paper>
        );
    };

    return (
        <>
            <Container maxWidth='xl'>
                <Grid container justifyContent='center' alignContent='center' spacing={2}>
                    <Grid item xs={9} md={6} lg={5} height='350px'>
                        <TopLeftPanel />
                    </Grid>
                    <Grid item xs={9} md={5} lg={4} height='350px'>
                        <TopRightPanel />
                    </Grid>
                    <GridBreak></GridBreak>
                    <Grid item xs={9} md={6} lg={5}>
                        <BottomLeftPanel />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
