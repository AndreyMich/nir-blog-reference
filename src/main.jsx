import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Home} from "./pages/Home.jsx";
import {Posts} from "./pages/Posts.jsx";
import {Post} from "./pages/Post.jsx";
import {Error} from "./pages/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error/>,
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/posts",
                loader: async () => {
                    return new Promise((resolve, _) => {
                        setTimeout(() => {
                            fetch('http://localhost:3000/posts')
                                .then(response => resolve(response.json()))
                        }, 5000)
                    });
                },
                element: <Posts/>
            },
            {
                path: "/post/:id",
                loader: async ({params}) => {
                    return new Promise((resolve,_)=>{
                       setTimeout(()=>{
                           fetch(`http://localhost:3000/posts/${params.id}`)
                               .then(data => resolve(data.json()))
                       },2000)
                    });
                },
                element: <Post/>
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
