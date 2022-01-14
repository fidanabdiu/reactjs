const redux = require("redux");
const INITIAL_STATE = {
    logged: false,
    username: "",
    errorAlertVisible: false,
    errorAlertText: "",
    infoAlertVisible: true,
    infoAlertText: "WELCOME"
};
const reducer = function (state, action) {
    switch (action.type) {
        case "LOGIN": {
            return {
                logged: true,
                username: action.username,
                errorAlertVisible: false,
                errorAlertText: "",
                infoAlertVisible: true,
                infoAlertText: "LOGGED IN SUCCESSFULLY."
            }
        }
        case "LOGOUT":
            return {
                logged: false,
                username: "",
                errorAlertVisible: false,
                errorAlertText: "",
                infoAlertVisible: true,
                infoAlertText: "LOGGED OUT SUCCESSFULLY."
            }
        case "SHOWERROR": {
            return {
                logged: state.logged,
                username: state.username,
                errorAlertVisible: true,
                errorAlertText: action.text,
                infoAlertVisible: false,
                infoAlertText: ""
            }
        }
        case "SHOWINFO": {
            return {
                logged: state.logged,
                username: state.username,
                errorAlertVisible: false,
                errorAlertText: "",
                infoAlertVisible: true,
                infoAlertText: action.text
            }
        }
        default:
            return INITIAL_STATE;
    }
};
const store = redux.createStore(reducer);
export default store;