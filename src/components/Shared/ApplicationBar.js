import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ApplicationBar() {
    const username = useSelector(state => state.user.username);
    const dispatch = useDispatch();
    const logoutHandler = function () {
        dispatch({ type: "LOGGEDOUT" });
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {username}
                        </Typography>
                        <Button color="inherit" onClick={logoutHandler}>LOGOUT</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};