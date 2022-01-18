import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { POSTCLEARED, TITLECHANGED, BODYCHANGED, ERROR, POSTCREATED, POSTUPDATED } from '../store/Store';

export default function PostForm() {
    const post = useSelector(state => state.post);
    const dispatch = useDispatch();
    const clearHandler = function () {
        dispatch({ type: POSTCLEARED });
    };
    const titleChangedHandler = function (event) {
        dispatch({ type: TITLECHANGED, payload: event.target.value });
    };
    const bodyChangedHandler = function (event) {
        dispatch({ type: BODYCHANGED, payload: event.target.value });
    };
    const saveHandler = function () {
        if (post.title.trim().length === 0) {
            dispatch({ type: ERROR, payload: "TITLE IS REQUIRED." });
            return;
        }
        if (post.body.trim().length === 0) {
            dispatch({ type: ERROR, payload: "BODY IS REQUIRED." });
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
                dispatch({ type: POSTCREATED, payload: { id: response.name, title: post.title, body: post.body } });
            }
            else {
                dispatch({ type: POSTUPDATED, payload: { id: post.id, title: post.title, body: post.body } });
            }
        });
    };
    return (
        <>
            <div className="mb-3">
                <label htmlFor="txtId" className="form-label">ID</label>
                <input type="text" className="form-control" id="txtId" value={post.id} disabled />
            </div>
            <div className="mb-3">
                <label htmlFor="txtTitle" className="form-label">TITLE</label>
                <input type="text" className="form-control" id="txtTitle" value={post.title} onChange={titleChangedHandler} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtBody" className="form-label">BODY</label>
                <textarea className="form-control" id="txtBody" value={post.body} onChange={bodyChangedHandler} rows="3"></textarea>
            </div>
            <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={clearHandler}>CLEAR</button>
                <button type="button" className="btn btn-primary" onClick={saveHandler}>SAVE</button>
            </div>
        </>
    );
};