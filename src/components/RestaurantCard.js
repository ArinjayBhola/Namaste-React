import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props  //object destructuring

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData; //object destructuring

    return (
        <>
            <div className="res-card">
                <img
                    className="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                    alt="Error"
                />
                <h2>{name}</h2>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </>
    )
}

export default RestaurantCard;