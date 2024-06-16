import React from 'react';
import ProductCard from '../../Components/CompoundPattern/ProductCard';

const CompoundPattern = () => {
  return (
    // use it to ensure that we don't have to pass if else, on top or on bottom
    <>
      <ProductCard>
        <ProductCard.Title>Ankit Raj</ProductCard.Title>
        <ProductCard.Img src="https://picsum.photos/200" alt="An Image" />
        <ProductCard.Description>
          Ankit Raj is a great personality.
        </ProductCard.Description>
        <ProductCard.Price>Rs. 1000 crore</ProductCard.Price>
      </ProductCard>
    </>
  );
};

export default CompoundPattern;
