import React, { useState } from 'react';
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

const QRComponent: React.FC = () => {
    const [isQRopen, setIsQROpen]= useState(true)

  return (
    <div className=' bg-white rounded-[2em] py-2 px-4 w-full'>
      <div  className='grid grid-cols-2'>
        <div className='flex items-center justify-start text-[2em]'>
          <h1 className='font-bold'>QR Code</h1>
        </div>
        <div className='flex items-center justify-end gap-3'>
          <img className='h-5 cursor-pointer' src='/icons/eye.png'></img>
          <img className='h-5 cursor-pointer' src='/icons/send.png'></img>
          <img className='h-5 cursor-pointer' src='/icons/document.png'></img>
          <img onClick={()=> setIsQROpen(!isQRopen)} className='h-5 cursor-pointer flex md:hidden' src={!isQRopen? '/icons/qrArrowDown.png': '/icons/qrArrowUp.png'}></img>
        </div>
      </div>
      <Collapse className='mt-2' open={isQRopen}>
        <div  className=''>
          <div className='bg-[#FFF5E9] flex h-1/2 items-center justify-center gap-2 rounded-[1em] p-2'>
            <img className='h-5' src='/icons/doc.png'></img>
            <p className='text-[1.2em]'>
              Download the QR code or share it with your friends.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[2em] p-4  bg-gradient-to-r from-red-500 via-red-500 to-orange-500 mt-2">
          <div className=' bg-white rounded-[2em] p-5'>
            <div className=" text-[1em] mt-2 flex items-center justify-center">
              <div className=''>
                <img className="object-fill  rounded-xl" src="/images/logo.png" alt="Profile"></img>
                <div className='text-[2em] font-bold mt-1 text-center'>Hala Ahmed</div>
                <div className="h-[10em] aspect-square rounded-md m-auto">
                  <img className="object-contain h-full aspect-square rounded-xl" src="/images/qr.png" alt="Profile"></img>
                </div>
                <p className='text-center text-[1.1em]'>Follow Us on Mazaady</p>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default QRComponent;
