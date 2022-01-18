import React from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

export default function Posts() {
    return (
        <div className="row">
            <div className="col-lg-4 b-r">
                <PostForm />
            </div>
            <div className="col-lg-8">
                <PostList />
            </div>
        </div>
    );
};