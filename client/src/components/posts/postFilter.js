import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const PostFilter = ({ categoryIdMain, changeCategoryIdMain, setSearchParams }) => {
    const categories = ['Strategy', 'Card', 'Deck builder', 'Kids'];

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 250,
            },
        },
    };

    const handleCategoryChange = (event) => {
        setSearchParams({ category: event.target.value });
    };

    return (
        <>
            <FormControl color='secondary' fullWidth size='small'>
                <InputLabel id='demo-simple-select-label'>Category</InputLabel>
                <Select
                    MenuProps={MenuProps}
                    color='secondary'
                    fullWidth
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label='Category'
                    // value={categoryIdMain ? categoryIdMain : -1}
                    onChange={handleCategoryChange}
                >
                    <MenuItem value={-1}>None</MenuItem>
                    {categories.map((item) => {
                        return (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </>
    );
};
