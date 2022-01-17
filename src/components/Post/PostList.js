import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

export default function PostList() {
    const postCollection = useSelector(state => state.postCollection);
    const dispatch = useDispatch();
    const getHandler = function () {
        fetch("https://reactjs-e78ff-default-rtdb.firebaseio.com/posts.json").then(response => response.json()).then(response => {
            let newPostCollection = [];
            for (const key in response) {
                newPostCollection.push({
                    id: key,
                    title: response[key].title,
                    body: response[key].body
                });
            }
            dispatch({ type: "POSTSFETCHED", payload: newPostCollection });
        });
    };
    const editHandler = function (event) {
        let id = event.target.id.split('|')[1];
        let post = postCollection.find(x => x.id === id);
        dispatch({ type: "POSTEDITED", payload: post });
    };
    const deleteHandler = function (event) {
        let id = event.target.id.split('|')[1];
        let url = "https://reactjs-e78ff-default-rtdb.firebaseio.com/posts/" + id + ".json";
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(response => {
            dispatch({ type: "POSTDELETED", payload: id });
        });
    };
    return (
        <div style={{ border: "1px solid #6C6FE4", padding: "20px", margin: "20px", borderRadius: "20px" }}>
            <br />
            <Button variant="contained" onClick={getHandler}>GET POSTS</Button>
            {
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
                            {postCollection.map(x =>
                                <TableRow key={x.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell><Button id={"edit|" + x.id} variant="contained" onClick={editHandler}>EDIT</Button></TableCell>
                                    <TableCell><Button id={"delete|" + x.id} variant="contained" onClick={deleteHandler}>DELETE</Button></TableCell>
                                    <TableCell align="right">{x.id}</TableCell>
                                    <TableCell align="right">{x.title}</TableCell>
                                    <TableCell align="right">{x.body}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    );
};