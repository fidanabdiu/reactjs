import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { Provider } from "react-redux";
import store from "../redux/Store";
import Posts from "./Posts";

describe("POSTS", function () {
    test("RENDERS 'POSTS'", function () {
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
        render(<Provider store={store}><Posts /></Provider>);
        //ACT
        //...NOTHING...
        //ASSERT
        const posts = screen.getByText("POSTS");
        expect(posts).toBeInTheDocument();
    });
});