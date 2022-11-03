import React, { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/authContext';

export const Addpost = ({ isAuth }) => {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');
    const { logout } = useAuth();

    const annCollection = collection(db, 'Ogłoszenia');
    let navigate = useNavigate();

    // const createAnn = async () => {
    //     await addDoc(annCollection, {
    //         title,
    //         postText,
    //         author: { userEmail: auth.currentUser.email, id: auth.currentUser.uid },
    //     });
    //     navigate('/');
    // };

    // useEffect(() => {
    //     if (!isAuth) {
    //         navigate('/Login');
    //     }
    // }, []);

    return (
        <div className='addPostPage'>
            <div className='addPostCon'>
                <h1>Dodaj ogłoszenie</h1>
                <div className='Title'>
                    <label>Nazwa:</label>
                    <input
                        placeholder='Tytuł gry '
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>
                <div className='Description'>
                    <label>Opis:</label>
                    <textarea
                        placeholder='Opis'
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }}
                    />
                </div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};
