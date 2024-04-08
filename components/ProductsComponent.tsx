import React, { useState } from 'react';
import ProductComponent from './ProductComponent';

const ProductsComponent: React.FC = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <>
      <div className="text-[2em] grid grid-cols-1 md:grid-cols-2 font-extrabold mb-5">
        <div className="grid grid-cols-3 gap-3 text-[0.7em]">
          <div className="bg-[#FFF5E9] flex items-center justify-center text-[#FF951D] border-[#FF951D] border-[0.1em] rounded-[0.5em] cursor-pointer h-10">
            <p>Products</p>
          </div>
          <div className="bg-[white] flex items-center justify-center text-[#828282] border-[#E0E0E0] border-[0.1em] rounded-[0.5em] cursor-pointer h-10">
            <p>Articles</p>
          </div>
          <div className="bg-[white] flex items-center justify-center text-[#828282] border-[#E0E0E0] border-[0.1em] rounded-[0.5em] cursor-pointer h-10">
            <p>Reviews</p>
          </div>
        </div>
        <div className="md:flex justify-end hidden">
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-orange-500 flex justify-between items-center p-2 text-white rounded-[0.5em] text-[0.7em] cursor-pointer">
            <img className="w-5 h-5 mx-1" src="/icons/add.png" alt="add icon"></img>
            <p>Add Review</p>
          </div>
        </div>
      </div>
      <div className="text-[2em] flex font-extrabold mb-2">
        <h1 >Products</h1>
        <span className="text-[grey] text-[0.5em]">(12)</span>
      </div>
      <div className="grid grid-rows-6 gap-5">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="row-span-1">
            <ProductComponent />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsComponent;
