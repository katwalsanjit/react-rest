import { RES_IMG_CDN } from "./utils/data";

const RestaurentCard = (props) => {
  // console.log("data is here..", props);
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="card-logo"
        alt="card-logo"
        src={RES_IMG_CDN + cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};


export default RestaurentCard;