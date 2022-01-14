import './App.css';
import React, { useState, useEffect } from 'react';
import Login from "./components/Authentication/Login";
import Alert from '@mui/material/Alert';
import ApplicationBar from './components/Shared/ApplicationBar';
import PostForm from "./components/Post/PostForm";
import PostList from "./components/Post/PostList";

export default function App() {
  //CONSTANTS
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState("");
  const [infoAlertVisible, setInfoAlertVisible] = useState(true);
  const [infoAlertText, setInfoAlertText] = useState("WELCOME");
  const [post, setPost] = useState({ id: "", title: "", body: "" });
  const [postCollection, setPostCollection] = useState([]);
  //LOGIN METHODS
  const usernameChangedHandler = function (event) {
    setUser(function (currentUser) {
      return { ...currentUser, username: event.target.value };
    });
  };
  const passwordChangedHandler = function (event) {
    setUser(function (currentUser) {
      return { ...currentUser, password: event.target.value };
    });
  };
  const loginHandler = function () {
    if (user.username.trim().length === 0) {
      alertHandler("error", "USERNAME IS REQUIRED.");
      return;
    }
    if (user.password.trim().length === 0) {
      alertHandler("error", "PASSWORD IS REQUIRED.");
      return;
    }
    if (user.username === "admin" && user.password === "123") {
      setUser(function (currentUser) {
        alertHandler("info", "LOGGED IN SUCCESSFULLY.");
        setLogged(true);
        return { username: user.username, password: user.password };
      });
    }
    else {
      alertHandler("error", "INVALID LOGIN ATTEMPT.");
    }
  };
  //APP BAR METHODS
  const logoutHandler = function () {
    setLogged(false);
    setUser(function (currentUser) {
      return { username: "", password: "" };
    });
  };
  //FORM METHODS
  const newHandler = function () {
    setPost(function (currentPost) {
      return { id: "", title: "", body: "" };
    });
  };
  const titleChangedHandler = function (event) {
    setPost(function (currentPost) {
      return { ...currentPost, title: event.target.value };
    });
  };
  const bodyChangedHandler = function (event) {
    setPost(function (currentPost) {
      return { ...currentPost, body: event.target.value };
    });
  };
  const saveHandler = function () {
    if (post.title.trim().length === 0) {
      alertHandler("error", "TITLE IS REQUIRED.");
      return;
    }
    if (post.body.trim().length === 0) {
      alertHandler("error", "BODY IS REQUIRED.");
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
      getHandler();
      if (post.id === "") {
        setPost(function (currentPost) {
          return { id: response.name, title: post.title, body: post.body };
        });
        alertHandler("info", "POST CREATED SUCCESSFULLY.");
      }
      else {
        alertHandler("info", "POST UPDATED SUCCESSFULLY.");
      }
    });
  };
  //LIST METHODS
  useEffect(function () { getHandler(); }, []);
  const getHandler = function () {
    fetch("https://reactjs-e78ff-default-rtdb.firebaseio.com/posts.json").then(response => response.json()).then(response => {
      setPostCollection(function (currentPostCollection) {
        let newPostCollection = [];
        for (const key in response) {
          newPostCollection.push({
            id: key,
            title: response[key].title,
            body: response[key].body
          });
        }
        return newPostCollection;
      });
    });
  };
  const editHandler = function (event) {
    let id = event.target.id.split('|')[1];
    setPost(function (currentPost) {
      let newPost = postCollection.find(x => x.id === id);
      return newPost;
    });
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
      setPost(function (currentPost) {
        getHandler();
        return { id: "", title: "", body: "" };
      });
    });
  };
  //SHARED
  const alertHandler = function (type, text) {
    setErrorAlertVisible(false);
    setErrorAlertText("");
    setInfoAlertVisible(false);
    setInfoAlertText("");
    if (type === "error") {
      setErrorAlertVisible(true);
      setErrorAlertText(text);
    }
    else if (type === "info") {
      setInfoAlertVisible(true);
      setInfoAlertText(text);
    }
  };
  return (
    <>
      {errorAlertVisible ? <Alert severity="error">{errorAlertText}</Alert> : <></>}
      {infoAlertVisible ? <Alert severity="info">{infoAlertText}</Alert> : <></>}
      {
        logged
          ?
          <div style={{ textAlign: "center" }}>
            <ApplicationBar username={user.username} logoutHandler={logoutHandler} />
            <PostForm post={post} newHandler={newHandler} titleChangedHandler={titleChangedHandler} bodyChangedHandler={bodyChangedHandler} saveHandler={saveHandler} />
            <PostList postCollection={postCollection} editHandler={editHandler} deleteHandler={deleteHandler} />
          </div>
          :
          <Login user={user} usernameChangedHandler={usernameChangedHandler} passwordChangedHandler={passwordChangedHandler} loginHandler={loginHandler} />
      }
    </>
  );
};