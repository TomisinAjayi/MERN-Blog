import React, { useState } from 'react';
import {AppBar, Typography, Toolbar, Box, Button, Tabs, Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
    const dispath = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [value, setValue] = useState(0);
  return (
    <AppBar position='sticky' sx={{ background: "purple" }}>
        <Toolbar>
            <Typography variant='h4'>BlogsApp</Typography>
            { isLoggedIn && (
                <Box display="flex" marginLeft={'auto'} marginRight="auto">
                    <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                        <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                    </Tabs>
                </Box>
            )}
            <Box display="flex" marginLeft="auto">
            { !isLoggedIn && (<>
                <Button LinkComponent={Link} to="/auth" variant="contained" sx={{margin: 1, borderRadius: 10}} color="warning">Login</Button>
                <Button LinkComponent={Link} to="/auth" variant="contained" sx={{margin: 1, borderRadius: 10}} color="warning">Signup</Button>
            </>)}                
{ isLoggedIn && (
                <Button onClick={()=>dispath(authActions.logout())} LinkComponent={Link} to="/auth" variant="contained" sx={{margin: 1, borderRadius: 10}} color="warning">Logout</Button>
                )}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;