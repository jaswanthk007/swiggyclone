/*sort
const Sort = ()=>{
    return(
      <div className="sort-align">
      <select>
        <option>Low to high cost</option>
        <option>High to low cost</option>
        <option onClick={()=>{console.log("Hello world!")}}>Top rated restaurants</option>
      </select>
      <button  className="tr-btn" onClick={()=>{
        resList = resList.filter((res)=>res.data.avgRating>4)
        console.log(resList)
      }}>Top rated restaurants</button>
      </div>
    )
  }
  export default Sort*/