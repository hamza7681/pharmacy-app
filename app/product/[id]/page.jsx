import Nav from "@/components/Header/Nav";
import React from "react";

const SingleProduct = ({ params }) => {
  return (
    <>
      <Nav />
      <h1>SingleProduct {params.id}</h1>
    </>
  );
};

export default SingleProduct;
