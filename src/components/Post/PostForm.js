import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/system/Box';
import TextField from "@mui/material/TextField";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";

export default function PostForm() {
    const post = useSelector(state => state.post);
    const dispatch = useDispatch();
    const clearHandler = function () {
        dispatch({ type: "POSTCLEARED" });
    };
    const titleChangedHandler = function (event) {
        dispatch({ type: "TITLECHANGED", payload: event.target.value });
    };
    const bodyChangedHandler = function (event) {
        dispatch({ type: "BODYCHANGED", payload: event.target.value });
    };
    const saveHandler = function () {
        if (post.title.trim().length === 0) {
            dispatch({ type: "ERROR", payload: "TITLE IS REQUIRED." });
            return;
        }
        if (post.body.trim().length === 0) {
            dispatch({ type: "ERROR", payload: "BODY IS REQUIRED." });
            return;
        }
        let url = "https://reactjs-e78ff-default-rtdb.firebaseio.com/posts";
        url += post.id === "" ? ".json" : "/" + post.id + ".json";
        fetch(url, {
            method: post.id === "" ? "POST" : "PUT",
            body: JSON.stringify({ title: post.title, body: post.body }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(response => {
            if (post.id === "") {
                dispatch({ type: "POSTCREATED", payload: { id: response.name, title: post.title, body: post.body } });
            }
            else {
                dispatch({ type: "POSTUPDATED", payload: { id: post.id, title: post.title, body: post.body } });
            }
        });
    };
    return (
        <>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 } }} style={{ border: "1px solid #6C6FE4", padding: "20px", margin: "20px", borderRadius: "20px" }}>
                <div><TextField type="text" label="ID" variant="outlined" value={post.id} disabled /></div>
                <div><TextField type="text" label="TITLE" variant="outlined" value={post.title} onChange={titleChangedHandler} /></div>
                <div><TextField type="text" label="BODY" variant="outlined" value={post.body} onChange={bodyChangedHandler} /></div>
                <div>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button variant="contained" onClick={clearHandler}>CLEAR</Button>
                        <Button variant="contained" onClick={saveHandler}>SAVE</Button>
                    </ButtonGroup>
                </div>
            </Box>
        </>
    );
};