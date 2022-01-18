import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
        <div>
            <button type="button" className="btn btn-primary" onClick={getHandler}>GET POSTS</button>
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
                    {postCollection.map(x =>
                        <tr key={x.id}>
                            <td><button id={"edit|" + x.id} type="button" className="btn btn-primary" onClick={editHandler}>EDIT</button></td>
                            <td><button id={"delete|" + x.id} type="button" className="btn btn-primary" onClick={deleteHandler}>DELETE</button></td>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.body}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};