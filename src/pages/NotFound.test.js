import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import NotFound from "./NotFound";

describe("NOTFOUND", function () {
    test("RENDERS EMPTY CONTAINER", function () {
        //ARRANGE
        const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
        useDispatchMock.mockReturnValue(jest.fn());
        const {container} = render(<NotFound />);
        //ACT
        //...NOTHING...
        //ASSERT
        expect(container.firstChild).toBeEmptyDOMElement();
    });
});