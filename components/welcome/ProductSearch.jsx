"use client";

import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { products } from "@/utils/fakeData";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const ProductSearch = () => {
  const [selectedType, setSelectedType] = useState("");
  const [types, setTypes] = useState([]);
  const [selectedProductArray, setSelectedProductArray] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const uniqueTypes = [...new Set(products.map((product) => product.type))];
    setTypes(uniqueTypes);
    console.log(uniqueTypes);
  }, []);

  const handleTypeChange = (e) => {
    setSelectedType(e.value);
    let findProducts = products.filter((val) => val.type === e.value);
    setSelectedProductArray(findProducts);
  };

  const clearItem = () => {
    setSelectedType("");
    setSelectedProductArray([]);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full h-[350px] md:h-[550px] flex flex-col pt-[100px] items-center">
      <div className="flex flex-col gap-5">
        <p className="text-[22px] font-semibold text-center">
          Search your product
        </p>
        <div className="flex items-center gap-3">
          <Dropdown
            options={types}
            value={selectedType}
            placeholder="Select product type"
            className="w-[250px]"
            onChange={(e) => handleTypeChange(e)}
          />
          <Dropdown
            options={selectedProductArray}
            optionLabel="name"
            placeholder="Select a Product"
            className="w-[250px]"
            onChange={(e) => setSelectedProduct(e.value)}
          />
        </div>
        {selectedProduct && (
          <div className="relative w-full p-4 lg:w-[500px] border-[1px] rounded-[4px] border-gray-300 overflow-hidden flex flex-col items-center justify-center h-auto gap-3">
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={clearItem}
            >
              <FaTimes color="#000000" fontSize={20} />
            </div>
            <Image
              src={selectedProduct?.image}
              alt="product_image"
              width={200}
              height={200}
              className="rounded-[4px]"
            />
            <p className="font-semibold">{selectedProduct?.name}</p>
            <p>INR {selectedProduct?.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
