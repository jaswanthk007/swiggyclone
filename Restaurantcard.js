/*testaurantcard*/
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
)}
export default Restaurantcard