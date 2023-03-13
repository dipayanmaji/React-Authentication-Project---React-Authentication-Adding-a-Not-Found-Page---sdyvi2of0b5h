import React from "react";
import Login from "./Login";
import Profile from "./Profile";

const PrivateRoute= ()=>{
    return(
        <div>{localStorage.getItem('username') === 'abc' && localStorage.getItem('password') === '123' ? <Profile/> : <Login />}</div>
    )
}
export default PrivateRoute;