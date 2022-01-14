import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

export default function PostList(props) {
    return (
        <>
            {
                props.postCollection.length === 0 ? <p>THERE ARE NO POSTS. YOU CAN START CREATING THEM.</p> :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="right">ID</TableCell>
                                    <TableCell align="right">TITLE</TableCell>
                                    <TableCell align="right">BODY</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.postCollection.map(x =>
                                    <TableRow key={x.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell><Button id={"edit|" + x.id} variant="contained" onClick={props.editHandler}>EDIT</Button></TableCell>
                                        <TableCell><Button id={"delete|" + x.id} variant="contained" onClick={props.deleteHandler}>DELETE</Button></TableCell>
                                        <TableCell align="right">{x.id}</TableCell>
                                        <TableCell align="right">{x.title}</TableCell>
                                        <TableCell align="right">{x.body}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </>
    );
};