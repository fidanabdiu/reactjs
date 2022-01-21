import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { POSTS_FETCHED, POST_EDITED, POST_DELETED, ERROR } from '../redux/Store';

export default function PostList() {
    const postCollection = useSelector(state => state.postCollection);
    const dispatch = useDispatch();
    useEffect(function () {
        getHandler();
    }, []);
    const getHandler = function () {
        fetch("https://reactjs-e78ff-default-rtdb.firebaseio.com/posts.json").then(function (response) {
            if (response.status === 200) {
                response.json().then(function (data) {
                    let newPostCollection = [];
                    for (const key in data) {
                        newPostCollection.push({
                            id: key,
                            title: data[key].title,
                            body: data[key].body
                        });
                    }
                    dispatch({ type: POSTS_FETCHED, payload: newPostCollection });
                });
            }
            else {
                dispatch({ type: ERROR, payload: "ERROR WHILE COMMUNICATING WITH THE API." });
            }
        });
    };
    const editHandler = function (event) {
        let id = event.target.id.split('|')[1];
        let post = postCollection.find(x => x.id === id);
        dispatch({ type: POST_EDITED, payload: post });
    };
    const deleteHandler = function (event) {
        let id = event.target.id.split('|')[1];
        let url = "https://reactjs-e78ff-default-rtdb.firebaseio.com/posts/" + id + ".json";
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.status === 200) {
                response.json().then(function (data) {
                    dispatch({ type: POST_DELETED, payload: id });
                });
            }
            else {
                dispatch({ type: ERROR, payload: "ERROR WHILE COMMUNICATING WITH THE API." });
            }
        });
    };
    return (
        <Card style={{ margin: "10px" }}>
            <Card.Header>POST LIST</Card.Header>
            <Card.Body>
                {
                    postCollection.length === 0
                        ?
                        <h3>THERE ARE NO POSTS. YOU CAN START CREATING THEM.</h3>
                        :
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>BODY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    postCollection.map(x => {
                                        return <tr key={x.id}>
                                            <td><button id={"edit|" + x.id} type="button" className="btn btn-light" onClick={editHandler}>EDIT</button></td>
                                            <td><button id={"delete|" + x.id} type="button" className="btn btn-light" onClick={deleteHandler}>DELETE</button></td>
                                            <td>{x.id}</td>
                                            <td>{x.title}</td>
                                            <td>{x.body}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                }
            </Card.Body>
        </Card>
    );
};