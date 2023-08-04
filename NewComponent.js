import React, { useEffect } from "react";
import  Restaurantcard, {withpromotedLabel} from "./Restaurantcard";
import { useState } from "react";
import Shimmerui from "./components/shimmerui";
import Dashboard from "./components/Dashboard";
import Login, {Example} from "./components/Dashbaord2";
import { Link } from "react-router-dom";

// const Restaurantcard = (props) =>{
//   const {resData} = props;
//     return(
//     <div className="card">
//     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId} className="img-width"/>
//     <h3>{resData.data.name}</h3>
//     <p>{resData.data.cusines}</p>
//     <p>{resData.data.avgRating}</p>
//     <p>{resData.data.totalRatings}</p>
//     <p>{resData.data.area}</p>
//   </div>
// )}

const NewComponent = ()=>{
const[searchText, setSearchText] = useState("");
const [resList, setresList] = useState([]);
const RestaurantCardPromoted = withpromotedLabel(Restaurantcard);
const [filteredRestaurant, setfilteredRestaurant] = useState([]);

useEffect (()=>{
apidata();},[])
const apidata = async ()=>{
const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.716379&lng=83.3243524&page_type=DESKTOP_WEB_LISTING"
);
console.log(fetchdata)
const json = await fetchdata.json()
setresList(json?.data?.cards[2]?.data?.data?.cards)
setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)};
return resList.length === 0?(<Shimmerui/>): (
<>  
<div className="sort-align flex">
<select>
  <option>Low to high cost</option>
  <option>High to low cost</option>
  <option onClick={()=>{console.log("Hello world!")}}>Top rated restaurants</option>
</select>
<button  className="tr-btn" onClick={()=>{
const filtereddata = resList.filter((res)=>res.data.avgRating>4)
setfilteredRestaurant(filtereddata)
console.log(resList)
}}>Top rated restaurants</button>
<button  className="tr-btn" onClick={()=>{
const filtereddataabv = resList.filter((rest)=>rest.data.totalRatings>500)
setfilteredRestaurant(filtereddataabv)
console.log(resList)}}>Above 500 ratings</button>
</div>
<div className="search-div"> 
<input type="search" className= "search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
<button className="btn search" onClick={()=>{
console.log({searchText})
const filteredRestaurant =  resList.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
setfilteredRestaurant(filteredRestaurant)
}}>Search</button>
</div>

 <div className="card-dis flex flex-wrap">
    {
   filteredRestaurant.map((restaurant)=>(
   
        restaurant.data.promoted?<RestaurantCardPromoted key = {restaurant.data.id}  resData = {restaurant}/>
          :<Restaurantcard key = {restaurant.data.id}  resData = {restaurant}/>
          
  
      ))}
</div>
<Dashboard/>
<Login/>
   </>)};
   
export default NewComponent