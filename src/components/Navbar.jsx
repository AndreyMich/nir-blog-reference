import {Link} from "react-router-dom";

export function Navbar(){
    return(
        <div className='navbar-container'>
            <Link to={'/'}>Home</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/about'}>About</Link>
        </div>
    )
}