const redux = require("redux");
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
export const USERNAMECHANGED = "USERNAMECHANGED";
export const PASSWORDCHANGED = "PASSWORDCHANGED";
export const LOGGEDIN = "LOGGEDIN";
export const LOGGEDOUT = "LOGGEDOUT";
export const POSTCLEARED = "POSTCLEARED";
export const TITLECHANGED = "TITLECHANGED";
export const BODYCHANGED = "BODYCHANGED";
export const POSTCREATED = "POSTCREATED";
export const POSTUPDATED = "POSTUPDATED";
export const POSTSFETCHED = "POSTSFETCHED";
export const POSTEDITED = "POSTEDITED";
export const POSTDELETED = "POSTDELETED";
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
    else if (action.type === USERNAMECHANGED) {
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
    else if (action.type === PASSWORDCHANGED) {
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
    else if (action.type === LOGGEDIN) {
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
    else if (action.type === LOGGEDOUT) {
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
    else if (action.type === POSTCLEARED) {
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
    else if (action.type === TITLECHANGED) {
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
    else if (action.type === BODYCHANGED) {
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
    else if (action.type === POSTCREATED) {
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
    else if (action.type === POSTUPDATED) {
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
    else if (action.type === POSTSFETCHED) {
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
    else if (action.type === POSTEDITED) {
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
    else if (action.type === POSTDELETED) {
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
        return INITIAL_STATE;
    }
};
const store = redux.createStore(reducer);
const stateChanged = function () {
    let state = store.getState();
    console.log(state);
};
store.subscribe(stateChanged);
export default store;