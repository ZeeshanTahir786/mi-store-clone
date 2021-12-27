import React from "react";
import ProductReviewCard from "./ProductReviewCard/ProductReviewCard";
import "../ProductReviews/ProductReviews.css";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((review, index) => (
        <ProductReviewCard
          price={review.price}
          name={review.name}
          image={review.image}
          review={review.review}
          index={index}
          key={index + 1}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
