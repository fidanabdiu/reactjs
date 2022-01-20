const redux = require("redux");
const LOCALSTORAGE_KEY = "REACTJS";
const INITIAL_STATE = {
    logged: false,
    user: {
        username: "",
        password: ""
    },
    post: {
        id: "",
        title: "",
        body: ""
    },
    postCollection: [],
    errorAlertVisible: false,
    errorAlertText: "",
    infoAlertVisible: true,
    infoAlertText: "INITIAL STATE"
};
export const ERROR = "ERROR";
export const INFO = "INFO";
export const USERNAME_CHANGED = "USERNAMECHANGED";
export const PASSWORD_CHANGED = "PASSWORDCHANGED";
export const LOGGED_IN = "LOGGEDIN";
export const LOGGED_OUT = "LOGGEDOUT";
export const POST_CLEARED = "POSTCLEARED";
export const TITLE_CHANGED = "TITLECHANGED";
export const BODY_CHANGED = "BODYCHANGED";
export const POST_CREATED = "POSTCREATED";
export const POST_UPDATED = "POSTUPDATED";
export const POSTS_FETCHED = "POSTSFETCHED";
export const POST_EDITED = "POSTEDITED";
export const POST_DELETED = "POSTDELETED";
const reducer = function (state, action) {
    if (action.type === ERROR) {
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: state.post.id,
                title: state.post.title,
                body: state.post.body
            },
            postCollection: state.postCollection,
            errorAlertVisible: true,
            errorAlertText: action.payload,
            infoAlertVisible: false,
            infoAlertText: ""
        };
    }
    else if (action.type === INFO) {
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: state.post.id,
                title: state.post.title,
                body: state.post.body
            },
            postCollection: state.postCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: action.payload
        };
    }
    else if (action.type === USERNAME_CHANGED) {
        return {
            logged: state.logged,
            user: {
                username: action.payload,
                password: state.user.password
            },
            post: {
                id: state.post.id,
                title: state.post.title,
                body: state.post.body
            },
            postCollection: state.postCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "USERNAME CHANGED SUCCESSFULLY."
        };
    }
    else if (action.type === PASSWORD_CHANGED) {
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: action.payload
            },
            post: {
                id: state.post.id,
                title: state.post.title,
                body: state.post.body
            },
            postCollection: state.postCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "PASSWORD CHANGED SUCCESSFULLY."
        };
    }
    else if (action.type === LOGGED_IN) {
        return {
            logged: true,
            user: {
                username: action.payload.username,
                password: action.payload.password
            },
            post: {
                id: state.post.id,
                title: state.post.title,
                body: state.post.body
            },
            postCollection: state.postCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "LOGGED IN SUCCESSFULLY."
        };
    }
    else if (action.type === LOGGED_OUT) {
        return {
            logged: false,
            user: {
                username: "",
                password: ""
            },
            post: {
                id: "",
                title: "",
                body: ""
            },
            postCollection: [],
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "LOGGED OUT SUCCESSFULLY."
        };
    }
    else if (action.type === POST_CLEARED) {
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: "",
                title: "",
                body: ""
            },
            postCollection: state.postCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "POST CLEARED SUCCESSFULLY."
        };
    }
    else if (action.type === TITLE_CHANGED) {
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: state.post.id,
                title: action.payload,
                body: state.post.body
            },
            postCollection: state.postCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "TITLE CHANGED SUCCESSFULLY."
        };
    }
    else if (action.type === BODY_CHANGED) {
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: state.post.id,
                title: state.post.title,
                body: action.payload
            },
            postCollection: state.postCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "BODY CHANGED SUCCESSFULLY."
        };
    }
    else if (action.type === POST_CREATED) {
        let newPostCollection = [...state.postCollection, action.payload];
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body
            },
            postCollection: newPostCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "POST CREATED SUCCESSFULLY."
        };
    }
    else if (action.type === POST_UPDATED) {
        let newPostCollection = [...state.postCollection];
        let index = newPostCollection.findIndex(x => x.id === action.payload.id);
        newPostCollection.splice(index, 1);
        newPostCollection.splice(index, 0, action.payload);
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body
            },
            postCollection: newPostCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "POST UPDATED SUCCESSFULLY."
        };
    }
    else if (action.type === POSTS_FETCHED) {
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: state.post.id,
                title: state.post.title,
                body: state.post.body
            },
            postCollection: action.payload,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "POSTS FETCHED SUCCESSFULLY."
        };
    }
    else if (action.type === POST_EDITED) {
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body
            },
            postCollection: state.postCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "POST SELECTED SUCCESSFULLY."
        };
    }
    else if (action.type === POST_DELETED) {
        let newPostCollection = [...state.postCollection];
        let index = newPostCollection.findIndex(x => x.id === action.payload);
        newPostCollection.splice(index, 1);
        return {
            logged: state.logged,
            user: {
                username: state.user.username,
                password: state.user.password
            },
            post: {
                id: "",
                title: "",
                body: ""
            },
            postCollection: newPostCollection,
            errorAlertVisible: false,
            errorAlertText: "",
            infoAlertVisible: true,
            infoAlertText: "POST DELETED SUCCESSFULLY."
        };
    }
    else {
        return getState();
    }
};
const store = redux.createStore(reducer);
const stateChangedHandler = function () {
    let state = store.getState();
    let stateJson = JSON.stringify(state);
    localStorage.setItem(LOCALSTORAGE_KEY, stateJson);
    console.log(state);
};
store.subscribe(stateChangedHandler);
function getState() {
    let stateJson = localStorage.getItem(LOCALSTORAGE_KEY);
    if (stateJson === null) {
        stateJson = JSON.stringify(INITIAL_STATE);
        localStorage.setItem(LOCALSTORAGE_KEY, stateJson);
    }
    let state = JSON.parse(stateJson);
    return state;
};
export default store;