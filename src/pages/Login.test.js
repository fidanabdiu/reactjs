import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import Login from "./Login";

describe("LOGIN", function () {
    test("RENDERS 'LOGIN'", function () {
        //ARRANGE
        const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
        const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
        useSelectorMock.mockReturnValue({ username: "", password: "" });
        useDispatchMock.mockReturnValue(jest.fn());
        render(<Login />);
        //ACT
        //...NOTHING...
        //ASSERT
        const login = screen.getAllByText("LOGIN");
        expect(login).toHaveLength(2);
    });
});