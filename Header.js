/*header*/
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../useOnline";

const Header = ()=>{
    const status = useOnline()
    const [loginbtn, setloginbtn] = useState("Login");
    return(
    <div className="header flex justify-between bg-rose-100">
    <div>
        <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" className="w-[50px]"/>
    </div>
    <div>
    <ul className="menu flex list-none items-center">
        <li className="m-2">Online Status:{status?"✅":"🔴"}</li>
        <li className="m-2">Home</li>
        <li className="m-2"><Link to="/About">About</Link></li> 
        <li className="m-2"><Link to="/Restaurant">Restaurants</Link></li>
        <li className="m-2">Offers</li>
        <li className="m-2">Help</li>
        <button className="loginbtn m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {()=>{ loginbtn === "Login"?  setloginbtn("Logout"):setloginbtn("Login");}}>{loginbtn}</button>
    </ul>
    </div>
    </div>
)}
export default Header