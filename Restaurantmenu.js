import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmercards from './components/shimmerui';

const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9307735&lng=77.5838302&restaurantId=201224&submitAction=ENTER + resId";

const Restaurantmenu = ()=>{
const [resInfo, setResInfo] = useState(null)
  useEffect(()=>{fetchMenu()},[]);
const fetchMenu = async () => {
  const { data } = await fetch(url).then(res => res.json());
  setResInfo(data);
  console.log(resInfo)
};
if (resInfo === null) return <Shimmercards/>;
const{name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.cards [2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
return (
  <>
<h1>{name}</h1>
<p>{cuisines}</p>
<p>{costForTwoMessage}</p>
{itemCards.map((item)=>(<li>{item.card.info.name}</li>))}
  </>);
};
export default Restaurantmenu;  



