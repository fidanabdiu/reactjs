import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ERROR from "../redux/Store";

export default function NotFound() {
    const dispatch = useDispatch();
    useEffect(function () { dispatch({ type: ERROR, payload: "PAGE NOT FOUND" }); }, []);
    return (
        <div></div>
    );
};