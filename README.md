# namaste react 
const FavoriteColor = () =>{
    const [color, setColor] = useState("red");
  return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor("red")}
        >Red</button>
        <button
          type="button"
          onClick={() => setColor("pink")}
        >Pink</button>
        <button
          type="button"
          onClick={() => setColor("green")}
        >Green</button>
      </>
    );
  }
const Test = () => {
  const [name, setName] = useState("food villa");
  return(
  <>
  <h1>{name}</h1>
  <button onClick={() => setName("Food world!")}>change</button>
</>
);
  }
  const Text = ()=>{
    const [demotext, setDemotext] = useState("World!")
    return(
      <>
      <h1>Hello{demotext}</h1>
      <button onClick={()=>setDemotext("Jaswanth")}>Change text</button>
      </>
    )
  }


   <Restaurantcard name="Kamat" cusines="Biryani" rating="4"/>
   <Restaurantcard name="Aarna" cusines="Chicken lollipop" rating="4.5"/>
   <Restaurantcard name="spicy venue" cusines="Veg fried rice" rating="5"/>
   <Restaurantcard name="Kfc" cusines="Chicken popcorn" rating="3.6"/>
   <Restaurantcard name="Paradise" cusines="Mushroom 65" rating="4.2"/>



/*restaurantcard
const Restaurantcard = (props) =>

{
  const {resData} = props;
    return(
    <div className="card">
    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId} className="img-width"/>
    <h3>{resData.data.name}</h3>
    <p>{resData.data.cusines}</p>
    <p>{resData.data.avgRating}</p>
    <p>{resData.data.totalRatings}</p>
    <p>{resData.data.area}</p>
  </div>
)}*/


/*rendering-componenet
const NewComponent = ()=>{

const[searchText, setSearchText] = useState("");
const [resList, setresList] = useState([]);
const [filteredRestaurant, setfilteredRestaurant] = useState([])
useEffect (()=>{
apidata();},[])


  const apidata = async ()=>{
    const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.716379&lng=83.3243524&page_type=DESKTOP_WEB_LISTING");
    const json = await fetchdata.json()
    setresList(json?.data?.cards[2]?.data?.data?.cards)
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)


  };
 return resList.length===0?(<Shimmerui/>): (
    <>  
    <div className="sort-align">
      <select>
        <option>Low to high cost</option>
        <option>High to low cost</option>
        <option onClick={()=>{console.log("Hello world!")}}>Top rated restaurants</option>
      </select>
      
      <button  className="tr-btn" onClick={()=>{
        const filtereddata = resList.filter((res)=>res.data.avgRating>4)
        setresList(filtereddata)
        console.log(resList)
      }}>Top rated restaurants</button>
      <button  className="tr-btn" onClick={()=>{
        const filtereddataabv = resList.filter((rest)=>rest.data.totalRatings>500)
        setresList(filtereddataabv)
        console.log(resList)
      }}>Above 500 ratings</button>
      </div>
      <div className="search-div"> 
    <input type="search" className= "search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
    <button className="btn search" onClick={()=>{
      console.log({searchText})
     const filteredRestaurant =  resList.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
     setfilteredRestaurant(filteredRestaurant)
      }}>Search</button>
    </div>
  <div className="card-dis">
    {
   filteredRestaurant.map((restaurant)=>(
        <Restaurantcard key = {restaurant.data.id}  resData = {restaurant}/>
      ))
    }
</div>
   </>)};*/
   /*<BrowserRouter>
<Header/>
<Switch>
  <Route path="/" exact Component={NewComponent}/> 
  <Route path="/about" exact Component={About}/> 
</Switch>
</BrowserRouter>*/