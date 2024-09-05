import React from 'react'
import Box from "@mui/material/Box"
import Link from '@mui/material/Link';


function NavTop() {
    return (
        <>
            <div className='hidden md:block'>
                <Box width="auto" bgcolor="#eeeeee" height="22px" p="6px 32px 0px" display="flex" justifyContent='space-between' fontSize='10px'>
                    <Box display="flex" gap='25px' height='15px' alignItems='center' letterSpacing='0.5px'>
                        <Link href="/" underline='none' color='grey' fontWeight='500'>Offers</Link>
                        <Link href="/" underline='none' color='grey' fontWeight='100'>Fanbook</Link>
                        <Link href="/" underline='none' color='grey' fontWeight='100'>Download App</Link>
                        <Link href="/" underline='none' color='grey' fontWeight='100'>TriBe Membership</Link>
                    </Box>
                    <Box display="flex" gap='25px' height='15px' alignItems='center' letterSpacing='0.5px'>
                        <Link href="/" underline='none' color='grey' fontWeight='500'>Contact Us</Link>
                        <Link href="/" underline='none' color='grey' fontWeight='100'>Track Order</Link>
                    </Box>
                </Box >
            </div>
        </>

    )
}

export default NavTop
