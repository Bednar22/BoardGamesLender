import { useState, useEffect } from 'react';
import { Grid, Container, Pagination, Box, Skeleton } from '@mui/material';
import { SearchComponent } from './search';
import { GridBreak } from '../../utils/gridBreak';
import { PostFilter } from './postFilter';
import { SortPosts } from './sortPosts';
import { SinglePost } from './singlePost';
import { useSearchParams } from 'react-router-dom';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase-config';

const postsExample = [
    {
        id: 1,
        rating: 5,
        title: 'Grzyb',
        price: 2,
        city: 'Wegliniec',
    },
    {
        id: 1,
        rating: 5,
        title: 'Grzyb',
        price: 2,
        city: 'Wegliniec',
    },
    {
        id: 1,
        rating: 5,
        title: 'Grzyb',
        price: 2,
        city: 'Wegliniec',
    },
    {
        id: 1,
        rating: 5,
        title: 'Grzyb',
        price: 2,
        city: 'Wegliniec',
    },
    {
        id: 1,
        rating: 5,
        title: 'Grzyb',
        price: 2,
        city: 'Wegliniec',
    },
    {
        id: 1,
        rating: 5,
        title: 'Grzyb',
        price: 2,
        city: 'Wegliniec',
    },
];

// TO DO - DO WSZYSKICH KOMPONENTOW W PostsPage !!!!!!!!!!!!!!!!!!!!!!!
// DODAC WSZYSTKIE FUNKCJE KTORE SCIAGAJA POSTY - WSZYSTKIE I PO KATEGORII
// DODAC FUNKCJE DO WYSZUKIWANIA POSTOW
// SPRAWDZIC JAK BEDA SCIAGALY SIE ZDJECIA DO POSTOW - URL CZY PLIK -> TO WAZNE, URL LATWIEJSZY
// SPRAWDZIC CZY MOZNA SORTOWAC I FILTROWAC W FIREBASIE A NIE TUTAJ NA FRONCIE - MALO WAZNE

export const PostsPage = (props) => {
    const maxOffersPerPage = 12;
    const [totalPages, setTotalPages] = useState(null);
    const [lowerIndex, setLowerIndex] = useState(null);
    const [upperIndex, setUpperIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState(null);
    const [categoryId, setCategoryId] = useState(searchParams.get('category'));
    const [searchBy, setSearchBy] = useState(null);
    const [offers, setOffers] = useState([]);

    const getAllPosts = async () => {
        const querySnapshot = await getDocs(collection(db, 'Ogłoszenia'));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            setOffers((current) => [...current, doc.data()]);
        });
    };

    const priceAscSort = (a, b) => {
        return b.price - a.price;
    };

    const priceDscSort = (a, b) => {
        return a.price - b.price;
    };

    const ratingAscSort = (a, b) => {
        return b.rating - a.rating;
    };

    const ratingDscSort = (a, b) => {
        return a.rating - b.rating;
    };

    const getOffersByCategory = () => {
        //do poprawy ta funkcja bo logika bedzie inna w tej apce
        if (categoryId === -1) {
            getAllPosts();
        } else {
            //tutaj tylko posty danej kateorii, mozna usunąc jak niepotrzebne
            console.log('GET FROM ONE CATEGORY');
        }
    };

    const getSortedOffers = () => {
        let arrCopy = offers;
        switch (sortBy) {
            case 'priceAsc':
                arrCopy.sort(priceAscSort);
                setOffers(arrCopy);
                break;
            case 'priceDsc':
                arrCopy.sort(priceDscSort);
                setOffers(arrCopy);
                break;
            case 'ratingAsc':
                arrCopy.sort(ratingAscSort);
                setOffers(arrCopy);
                break;
            case 'ratingDsc':
                arrCopy.sort(ratingDscSort);
                setOffers(arrCopy);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        getSortedOffers();
    }, [sortBy]);

    useEffect(() => {
        getOffersByCategory();
    }, [categoryId]);

    useEffect(() => {
        let searchCat = searchParams.get('category');
        console.log(searchCat);
        if (!searchCat) {
            getAllPosts();
        } else {
            setCategoryId(searchCat);
        }
    }, []);

    useEffect(() => {
        if (searchBy !== '') {
            //tutaj zapytanie z szukaniem po jakichś parametrach w firebase np. po nazwie
            console.log('po nazwie');
        } else {
            getAllPosts();
        }
    }, [searchBy]);

    const handlePaginationChange = (event, value) => {
        setCurrentPage(value);
        setLowerIndex((value - 1) * maxOffersPerPage);
        if (value * maxOffersPerPage > offers.length) {
            setUpperIndex(offers.length);
        }
        setUpperIndex(value * maxOffersPerPage);
    };

    useEffect(() => {
        setTotalPages(Math.ceil(offers.length / maxOffersPerPage));
        handlePaginationChange(null, 1);
    }, [offers]);

    return (
        <>
            <Container maxWidth='xl' justifyItems='center' alignItems='center'>
                <Grid container direction='row' alignItems='center' justifyContent='space-evenly'>
                    <Grid item xs={3} md={2}>
                        <PostFilter
                            categoryIdMain={categoryId}
                            changeCategoryIdMain={setCategoryId}
                            setSearchParams={setSearchParams}
                        />
                    </Grid>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={3} md={2}>
                        <SortPosts sortByMain={sortBy} changeSortByMain={setSortBy} />
                    </Grid>
                    <Grid item xs={0} md={3}>
                        <GridBreak></GridBreak>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <SearchComponent setSearchBy={setSearchBy} />
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{ my: 2 }}>
                    {offers &&
                        offers.slice(lowerIndex, upperIndex).map((item) => {
                            return (
                                <Grid item xs={10} sm={8} md={6} lg={4} xl={3}>
                                    <SinglePost
                                        postId={item.id}
                                        renterNickname={item.owner}
                                        renterScore={item.rating}
                                        offerTitle={item.title}
                                        pricePerDay={item.pricePerDay}
                                        offerCity={item.city}
                                        imageUrl={item.imageUrl}
                                    ></SinglePost>
                                </Grid>
                            );
                        })}
                </Grid>
                <Box display='flex' justifyContent='center' sx={{ pb: 4 }}>
                    {totalPages && offers ? (
                        <Pagination
                            count={totalPages}
                            color='primary'
                            onChange={handlePaginationChange}
                            page={currentPage}
                        />
                    ) : (
                        <Skeleton variant='rectangular' />
                    )}
                </Box>
            </Container>
        </>
    );
};
