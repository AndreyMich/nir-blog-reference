import {useEffect, useState} from "react";
import {Link, useLoaderData, useNavigation} from "react-router-dom";
import {GlobalSpinner} from "../components/GlobalSpinner.jsx";

export function Posts() {
    console.log('posts rendered');

    const posts = useLoaderData();

    return (
        <div>
            <h1>Posts</h1>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
