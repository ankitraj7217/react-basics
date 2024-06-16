import React from 'react';
import ProductCardDescription from './ProductCardDescription.jsx';
import ProductCardImg from '../../../Components/CompoundPattern/ProductCard/ProductCardImg.jsx';
import ProductCardPrice from '../../../Components/CompoundPattern/ProductCard/ProductCardPrice.jsx';
import ProductCardTitle from '../../../Components/CompoundPattern/ProductCard/ProductTitle.jsx';

const ProductCard = ({ children }) => {
  return <div aria-label="product-card">{children}</div>;
};

ProductCard.Title = ProductCardTitle;
ProductCard.Description = ProductCardDescription;
ProductCard.Img = ProductCardImg;
ProductCard.Price = ProductCardPrice;

export default ProductCard;
