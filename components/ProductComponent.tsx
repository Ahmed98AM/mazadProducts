import React, { useState } from 'react';

const ProductComponent: React.FC = () => {
    const [isLike, setIsLike]= useState(false)
  return (
    <div className="grid grid-cols-4 gap-5">
        <div className="flex items-start justify-start col-span-4 gap-5 ">
            <div className="relative ">
                <img className="object-fit aspect-[6/5] h-20" src="/images/products/prod-1.png"></img>
                <div onClick={()=> {setIsLike(!isLike)}}  className='md:hidden absolute top-1 w-5 h-5 left-1 bg-white  rounded-full flex items-center justify-center p-1'>
                    <img className="object-contain w-4 h-4 aspect-square cursor-pointer " src={isLike? "/icons/like.png": "/icons/like-empty.png"}></img>
                </div>  
                <div onClick={()=> {setIsLike(!isLike)}}  className=' absolute bottom-0 w-10 md:w-16 h-5 right-0 bg-[#D20653]  rounded-tl-full rounded-br-full flex items-center justify-center font-bold text-white text-[0.01em]'>
                    <p className='text-[0.92vw] md:text-[0.72em]'>Live auction</p>
                </div>  
            </div>
            <div className="grid grid-rows-3 h-full w-full">
                <div className="flex items-center justify-between w-[100%] overflow-hidden whitespace-nowrap text-ellipsis">
                    <p>Six-piece clothing set (blouse - pants - hat and ...)</p>
                    <div onClick={()=> {setIsLike(!isLike)}} className=" aspect-square hidden md:block ">
                        <img className="object-contain w-4 h-4 aspect-square cursor-pointer" src={isLike? "/icons/like.png": "/icons/like-empty.png"}></img>
                    </div>
                </div>
                <div className="text-[grey] flex items-center">starting price <span className="font-bold text-black px-2">1000 EGP</span></div>
                <div className="flex  gap-2 items-center">
                    <div className="grid grid-cols-3 gap-3 font-bold">
                        <div className="bg-[#FFF5E9] text-[#FF951D] text-center rounded-[2em] py-1 px-3 ">2 <span className="text-[0.7em]">days</span></div>
                        <div className="bg-[#FFF5E9] text-[#FF951D] text-center rounded-[2em] py-1 px-3">10 <span className="text-[0.7em]">hours</span></div>
                        <div className="bg-[#FFF5E9] text-[#FF951D] text-center rounded-[2em] py-1 px-3">50 <span className="text-[0.7em]">min</span></div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="col-span-3">
        </div> */}
    </div>
  );
};

export default ProductComponent;
