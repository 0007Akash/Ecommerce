import React from 'react'
import Container from "@mui/material/Container"
import { Box, Divider, Input } from '@mui/material'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import './style.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';


function MainNav() {

    return (
        <>
            <Box sx={{ width: '100%', height: '61px', backgroundColor: 'white' }}>
                <Container maxWidth="lg" sx={{ height: '61px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ height: '61px', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '150px', height: '100%', display: 'flex', alignItems: 'center' }}>
                            <Link to='/'><img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" width='100%' height='100%' /></Link>
                        </Box>
                        <div className='hidden md:block'>
                            <Box sx={{ display: 'flex' }}>
                                <ul style={{ display: 'flex', alignItems: 'center', gap: '20px', textTransform: 'uppercase', listStyle: 'none', marginLeft: '40px', fontSize: '14px' }}>
                                    <li ><a style={{ textDecoration: 'none', color: 'black' }} href="/">men</a></li>
                                    <li><a style={{ textDecoration: 'none', color: 'black' }} href="/">women</a></li>
                                    <li><a style={{ textDecoration: 'none', color: 'black' }} href="/">mobile covers</a></li>
                                </ul>
                            </Box>
                        </div>
                    </Box>
                    <Box className='navSearch'>
                        <div className='hidden md:block'>
                            <TextField
                                size='small'
                                sx={{
                                    '& .MuiInputBase-input': {
                                        fontSize: '14px',
                                        fontWeight: '300',
                                        opacity: '0.8',
                                        width: '250px',
                                        padding: '12px'
                                    },
                                }}
                                variant="outlined"
                                placeholder="Search..."
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <p>|</p>
                        <Box className='loginBtn'>
                            <Link to="/login">Login</Link>
                        </Box>
                        <Box>
                            <FavoriteBorderIcon className='fav' />
                        </Box>
                        <Box>
                            <ShoppingBagOutlinedIcon className='cartIcon' />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Divider />
        </>
    )
}

export default MainNav
