import {Navbar} from "./Navbar.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import {GlobalSpinner} from "./GlobalSpinner.jsx";

export function Layout(){
     const navigation = useNavigation();
    return (
        <>
            <Navbar/>
            {navigation.state === 'loading' && <GlobalSpinner/>}
            <Outlet/>
            <footer> some cool footer</footer>
        </>
    )
}