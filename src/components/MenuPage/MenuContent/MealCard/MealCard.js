import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../actions/cartActions";
import "./MealCard.scss";

const MealCard = ({ info, addToCart }) => {
  console.log('this is the info', info);
  const { name, imageURL, price } = info;

  const handleClick = () => {
    addToCart(info);
  };

  return (
    <div className="meal-card">
      <div className="meal-image-container">
        <img className="meal-image" alt={name} src={`/images${imageURL}`} />
      </div>
      <div className="extra">
        <h4 className="meal-name">{name}</h4>
        {price && <h4 className="price">${price.toFixed(2)}</h4>}
        <div
          className="add-btn"
          title="Add to cart"
          onClick={handleClick}
        >
          <i className="fas fa-plus plus" />
        </div>
      </div>
    </div>
  );
};

// const mapDispatchToProps = {
//   dispatchAddToCart
// };


const mapDispatchToProps = dispatch => {
  return {
    addToCart: info => {
      dispatch(addToCart(info));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MealCard);
