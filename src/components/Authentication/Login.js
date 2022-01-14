import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";

export default function Login(props) {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 } }}>
                        <div><TextField type="text" label="USERNAME" variant="outlined" value={props.user.username} onChange={props.usernameChangedHandler} /></div>
                        <div><TextField type="password" label="PASSWORD" variant="outlined" value={props.user.password} onChange={props.passwordChangedHandler} /></div>
                        <div><Button variant="contained" onClick={props.loginHandler}>LOGIN</Button></div>
                    </Box>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </>
    );
};