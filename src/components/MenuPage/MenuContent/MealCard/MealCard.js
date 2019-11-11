import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../actions/cartActions";
import "./MealCard.scss";

const MealCard = ({ info, addToCart }) => {
  const { name, imageURL, price, id } = info;
  const handleClick = () => {
    addToCart(id);
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

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MealCard);
