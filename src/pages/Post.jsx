import {useLoaderData, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export function Post() {
    console.log("Post rendered");
    const post = useLoaderData();

    if(!post){
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <h1>Post {post.id}</h1>
            <div>{post.title}</div>
        </div>
    )
}
