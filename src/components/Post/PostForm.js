import React from 'react';
import Box from '@mui/system/Box';
import TextField from "@mui/material/TextField";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";

export default function PostForm(props) {
    return (
        <>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 } }}>
                <div><TextField type="text" label="ID" variant="outlined" value={props.post.id} disabled /></div>
                <div><TextField type="text" label="TITLE" variant="outlined" value={props.post.title} onChange={props.titleChangedHandler} /></div>
                <div><TextField type="text" label="BODY" variant="outlined" value={props.post.body} onChange={props.bodyChangedHandler} /></div>
                <div>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button variant="contained" onClick={props.newHandler}>NEW</Button>
                        <Button variant="contained" onClick={props.saveHandler}>SAVE</Button>
                    </ButtonGroup>
                </div>
            </Box>
        </>
    );
};