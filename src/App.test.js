import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/Store";
import App from "./App";

describe("APP", function () {
    test("RENDERS 'INITIAL STATE' IN INITIAL STATE", function () {
        //ARRANGE
        const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
        useSelectorMock.mockReturnValue({
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
        });
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
        //ACT
        //...NOTHING...
        //ASSERT
        const initialState = screen.getByText("INITIAL STATE");
        expect(initialState).toBeInTheDocument();
    });
});