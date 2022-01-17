import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";

export default function Login() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const usernameChangedHandler = function (event) {
        dispatch({ type: "USERNAMECHANGED", payload: event.target.value });
    };
    const passwordChangedHandler = function (event) {
        dispatch({ type: "PASSWORDCHANGED", payload: event.target.value });
    };
    const loginHandler = function () {
        if (user.username.trim().length === 0) {
            dispatch({ type: "ERROR", payload: "USERNAME IS REQUIRED." });
            return;
        }
        if (user.password.trim().length === 0) {
            dispatch({ type: "ERROR", payload: "PASSWORD IS REQUIRED." });
            return;
        }
        if (user.username === "admin" && user.password === "123") {
            dispatch({ type: "LOGGEDIN", payload: user });
        }
        else {
            dispatch({ type: "ERROR", payload: "INVALID CREDENTIALS." });
        }
    };
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 } }} style={{ border: "1px solid #6C6FE4", padding: "20px", margin: "20px", borderRadius: "20px" }}>
                        <div><TextField type="text" label="USERNAME" variant="outlined" value={user.username} onChange={usernameChangedHandler} /></div>
                        <div><TextField type="password" label="PASSWORD" variant="outlined" value={user.password} onChange={passwordChangedHandler} /></div>
                        <div><Button variant="contained" onClick={loginHandler}>LOGIN</Button></div>
                    </Box>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </>
    );
};