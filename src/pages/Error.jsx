import {Link} from "react-router-dom";

export function Error(){
    return (
        <>
            <p>Error occurred</p>
            <Link to='/'>Return to Home</Link>
        </>
    )
}